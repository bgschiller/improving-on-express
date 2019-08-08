interface HasRow<R> { row: R; }

interface WithItemId { item_id: string; }

function someMiddleware<C, R>(c: C & WithItemId): Promise<C & HasRow<R>> {
  // ...
}