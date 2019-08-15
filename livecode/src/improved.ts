import express from 'express';
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import {
  Connection,
  withConnection,
  decodeBody,
  NotAuthorized,
  json,
  Forbidden,
} from 'fascia';
import {
  verifyLogin,
  findUserById,
  createTalk,
  User,
} from './shared';
import * as t from 'io-ts';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/login', (req, res) => {});

app.post('/talks', (req, res) => {});

export default app;
