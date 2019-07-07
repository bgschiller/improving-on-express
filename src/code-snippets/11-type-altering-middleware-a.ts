app.post(
  '/favorite',
  passport.authenticate(),
  (req, res) => {
    // req.user should be
    // available because of
    // passport.authenticate()
});
