async function requiresLogin(
  conn: Connection
): Promise<Connection> {
  const user = await verifyAuth(conn);
  if (!user) {
    throw new NotAuthorized();
  }
  return {
    ...conn, user,
  };
}
