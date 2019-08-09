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
  createTalk
} from "./shared";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post("/login", async (req, res) => {});

app.post("/talks", async (req, res) => {});

app.delete("/talks", async (req, res) => {});

export default app;
