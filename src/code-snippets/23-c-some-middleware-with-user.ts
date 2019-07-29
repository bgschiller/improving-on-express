interface HasUser {
  user: User;
}

function someMiddleware<C>(conn: C): Promise<C & HasUser> {
  // ...
}