import app from "../src/baseline-cheatsheet";
import request from "supertest";

describe("/login", () => {
  it("fails if username or password is not provided", async () => {
    await request(app)
      .post("/login")
      .send({ username: "brian" })
      .expect(422);
    await request(app)
      .post("/login")
      .send({ password: "hunter2" })
      .expect(422);
  });

  it("rejects invalid credentials", async () => {
    await request(app)
      .post("/login")
      .send({ username: "brian", password: "hunter2" })
      .expect(401);
  });

  it("sets a cookie on valid credentials", async () => {
    await request(app)
      .post("/login")
      .send({ username: "heidela", password: "dogs4ever" })
      .expect(200)
      .expect("Set-Cookie", /userId/);
  });
});
