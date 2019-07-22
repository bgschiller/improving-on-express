async function requiresLogin(req, res, next) {
  const user = await verifyAuth(req);
  if (!user) {


  }


}
