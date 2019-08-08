interface WithUser {
  user: User;
}

async function requiresLogin(
  conn: Connection
): Promise<Connection & WithUser> {
  const user = await verifyAuth(conn);
  if (!user) {
    throw new NotAuthorized();
  }
  return {
    ...conn, user,
  };
}
