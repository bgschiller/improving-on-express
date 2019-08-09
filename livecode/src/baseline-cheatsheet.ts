import express, {
  Request,
  Response,
  NextFunction
} from "express";
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import {
  verifyLogin,
  findUserById,
  destroyAllTalks,
  User,
  createTalk
} from "./shared";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET_KEY));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(422).json({
      error: "must include both username and password"
    });
    return; // forget this return though
  }
  const user = await verifyLogin(username, password);
  if (!user) {
    res
      .status(401) // get these in the wrong order first
      .json({ error: "incorrect username and password" });
    return;
  }
  res.cookie("userId", user.id, {
    signed: true,
    httpOnly: true
  });
  res.json(user);
});

async function requiresLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.signedCookies.userId;
  // note: we will not try storing this on the `req`
  // object until it's time to write the /talks endpoint
  const user = userId && (await findUserById(userId));
  if (!user) {
    res
      .status(403)
      .json({ error: "must be logged in to take that action" });
  }
  next();
}

// add this later, after ts complains.
declare global {
  namespace Express {
    interface Request {
      user?: User; // 😡
    }
  }
}

app.post("/talks", requiresLogin, async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res
      .json({ error: "must include both title and description" })
      .status(422);
  }
  const user_id = req.user!.id; // 😡
  const talk = await createTalk({
    user_id,
    title,
    description
  });
  res.json(talk);
});

app.delete(
  "/talks",
  /* forgot requiresLogin */ async (req, res) => {
    if (!req.user!.isAdmin) {
      res.status(403);
    }
    destroyAllTalks();
    res.status(200);
  }
);

export default app;
