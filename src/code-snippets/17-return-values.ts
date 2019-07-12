app.get('healthcheck',
  withConnection(conn => {
    return {
      status_code: 200,
      headers: {
        'content-type':
        'text/plain'
      },
      body: 'all is well',
    };
}));
