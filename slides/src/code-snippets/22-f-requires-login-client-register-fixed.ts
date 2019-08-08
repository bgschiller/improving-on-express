app.delete('/everything', withConnection(
  conn => requiresLogin(conn)
    .then(deleteEverything)
));
