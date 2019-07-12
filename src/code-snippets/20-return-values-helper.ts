function text(body: string, status_code: number = 200): Resp {
  return {
    status_code,
    body,
    headers: {
      'content-type': 'text/plain',
    },
  };
}

app.get('healthcheck',
  withConnection(conn => text('all is well')));
