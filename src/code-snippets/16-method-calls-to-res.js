app.get('/healthcheck',
  (req, res) => {
    res
      .status(200)
      .set(
        'content-type',
        'text/plain')
      .send('all is well');
  }
);
