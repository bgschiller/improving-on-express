function deleteEverything(conn: Connection & WithUser): Promise<Resp> {
  if (!conn.user.isAdmin) throw new Forbidden();
  // ...
}