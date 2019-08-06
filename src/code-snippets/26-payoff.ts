app.patch(
  // to update a talk, send a PATCH request
  '/talks/:id', // to this endpoint
  withConnection(
    conn =>
      // you must be logged in
      requiresLogin(conn)
        // Look to the :id in the url params for which talk
        .then(itemIdFromUrl('id'))
        // you must own the talk in question
        .then(mustOwnTalk)
        // request body must match this interface
        .then(decodeBody(CreateUpdateTalkV))
        // update the database
        .then(talkCrud.update)
        // respond with json
        .then(jsonFrom('row')),
  ),
);
