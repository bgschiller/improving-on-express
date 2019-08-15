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
  User,
  createTalk
} from "./shared";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .json({ error: "must include both username and password" })
      .status(422);
  }
  const user = await verifyLogin(username, password);
  if (!user) {
    res
      .json({ error: "incorrect username and password" })
      .status(401);
  }
  // @ts-ignore
  res.cookie("userId", user.id);
  res.json(user);
});

async function requiresLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.cookies.userId;
  const user = userId && (await findUserById(userId));
  if (!user) {
    res
      .json({ error: "must be logged in to take that action" })
      .status(401);
  }
  next();
}

// add this later, after ts complains.
// declare global {
//   namespace Express {
//     interface Request {
//       user?: User; // 😡
//     }
//   }
// }

app.post("/talks", requiresLogin, async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res
      .json({ error: "must include both title and description" })
      .status(422);
  }
  // @ts-ignore
  const user_id = req.user.id; // 😡
  const talk = await createTalk({
    user_id,
    title,
    description
  });
  res.json(talk);
});

export default app;
