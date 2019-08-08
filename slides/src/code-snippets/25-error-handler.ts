export class ControllerError extends Error { /* ... */ }

export function errorHandler(err: any): Resp {
  if (err instanceof ControllerError) return err.toResponse();
  // all other errors
  return {
    body: 'an error occurred',
    status_code: 500,
    headers: {},
  };
}

export class NotAuthorized extends ControllerError { /* ... */ }
export class Forbidden extends ControllerError { /* ... */ }
export class ClientError extends ControllerError { /* ... */ }
