Livecoding

Let's code a few features using regular express and then using `fascia`.

### Login endpoint

- Requires a payload of `{ username, password }` (or else 422)
- returns a 401 on incorrect username/password combo
- on success, produces a response that:
  - includes some info about the user (id, fullName, isAdmin)
  - has a Set Cookie header to keep the user logged in

### Create a Talk endpoint

- Must be logged in to access this endpoint (or else 403)
- Requires a payload of `{ title, description }` (or else 422)
- Sets `user_id` to the id of the logged-in user
- on success, produces a response that contains the title, description, and an id.

### Delete all Talks endpoint

- Must be logged in as an admin to access this endpoint (or else 403)
- Destroys all talks from the db (to reset for next year)
