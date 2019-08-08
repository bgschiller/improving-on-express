function deleteEverything(conn: Connection): Promise<Resp> {
  if (!conn.user.isAdmin) throw new Forbidden();
  // ...
}