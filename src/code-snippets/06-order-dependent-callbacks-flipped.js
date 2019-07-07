app.get('/error', (req, res) => {
  res
    .status(400)
    .json({ msg: 'ya done goofed' })
});