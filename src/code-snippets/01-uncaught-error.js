app.post('/talks', (req, res) => {
  if (!req.user) {
    throw new Error('must be logged in');
  }
  const post = createPost(req.body);
  res.json(post);
});
