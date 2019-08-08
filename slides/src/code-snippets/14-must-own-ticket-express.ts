function mustOwnTicket(
  req: Request, res: Response, next: NextFunction,
) {
  const ticketId = req.params.ticketId;
  req.ticket = findTicketById(ticketId);
  if (!req.ticket || req.user.id !== req.ticket.purchaser_id) {
    res.sendStatus(403);
  } else {
    next();
  }
}
