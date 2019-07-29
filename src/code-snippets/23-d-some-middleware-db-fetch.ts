interface HasRow<R> { row: R; }

interface WithItemId { item_id: string; }

function someMiddleware<C, R>(
  conn: C & WithItemId
): Promise<C & HasRow<R> {
  // ...
}