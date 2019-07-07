app.get('/error', (req, res) => {
  res
    .json({ msg: 'ya done goofed' })
    .status(400)
});