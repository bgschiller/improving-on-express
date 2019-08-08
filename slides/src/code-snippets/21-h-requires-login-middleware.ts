async function requiresLogin(conn) {
  const user = await verifyAuth(conn);
  if (!user) {
    throw new NotAuthorized();
  }
  return {
    ...conn, user,
  };
}
