async function requiresLogin(req, res, next) {
  const user = await verifyAuth(req);
  if (!user) {
    res.sendStatus(401);
    return; // no next() call!
  }
  req.user = user;
  next();
}
