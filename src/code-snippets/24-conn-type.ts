interface Connection {
  body: unknown;
  method: string;
  path: string;
  params: {
    [k: string]: string
  };
  query: {
    [k: string]: string
  };
  _req: Request;
}
