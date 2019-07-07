const passport = require('passport');

app.post(
  '/talks',
  (req, res) => {
    const talk = createTalk(
      req.body,
      req.user.id,
    );
    res.json(talk);
});
