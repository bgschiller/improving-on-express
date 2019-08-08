app.get(
  '/news',
  (req, res) => {
    // req.user is unavailable,
    // because passport
    // middleware is not included
});