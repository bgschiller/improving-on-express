app.delete('/posts', (req, res) => {
  if (!req.user.isAdmin) {
    res.sendStatus(403);
    return; // 😬
  }
  Posts.destroyAll();
  res.sendStatus(200);
});