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
  destroyAllTalks,
  createTalk,
  User,
} from './shared';
import * as t from 'io-ts';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const LoginParams = t.type({
  username: t.string,
  password: t.string,
});

const decodeLoginParams = decodeBody(LoginParams);

app.post(
  '/login',
  withConnection(conn =>
    decodeLoginParams(conn).then(async conn => {
      const user = await verifyLogin(
        conn.body.username,
        conn.body.password,
      );
      if (!user) {
        throw new NotAuthorized('username or password is incorrect');
      }
      return {
        status_code: 200,
        body: JSON.stringify(user),
        headers: {
          'set-cookie': `userId=${user.id}`,
          'content-type': 'application/json',
        },
      };
    }),
  ),
);

interface AuthedConn extends Connection {
  user: User;
}
async function requiresLogin(conn: Connection): Promise<AuthedConn> {
  const user = await findUserById(Number(conn.cookies.userId));
  if (!user) {
    throw new NotAuthorized('Must be logged in for this action');
  }
  return {
    ...conn,
    user,
  };
}

const CreateTalkPayload = t.type({
  title: t.string,
  description: t.string,
});
app.post(
  '/talks',
  withConnection(conn =>
    requiresLogin(conn)
      .then(decodeBody(CreateTalkPayload))
      .then(conn => {
        const talk = createTalk({
          ...conn.body,
          user_id: conn.user.id,
        });
        return json(talk);
      }),
  ),
);

app.delete(
  '/talks',
  withConnection(conn =>
    requiresLogin(conn).then(async conn => {
      if (!conn.user.isAdmin) {
        throw new Forbidden('you must be an admin');
      }
      await destroyAllTalks();
      return json({ status: 'ok' });
    }),
  ),
);

export default app;
