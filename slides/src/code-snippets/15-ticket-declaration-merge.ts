declare global {
  namespace Express {
    interface Request {
      ticket?: Ticket;
      // ...
    }
  }
}
