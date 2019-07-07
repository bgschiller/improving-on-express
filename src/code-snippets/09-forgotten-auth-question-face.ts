const passport = require('passport');

app.post(
  '/talks',
  passport.authenticate('jwt'),
  (req, res) => {
    const talk = createTalk(
      req.body,
      req.user.id, // 🤔
    );
    res.json(talk);
});
