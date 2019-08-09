import * as shared from "../src/shared";
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
      .expect("set-cookie", /userId/);
  });
});

describe("POST /talks", () => {
  let createTalk: jest.SpyInstance<
    Promise<shared.Talk>,
    [shared.CreateTalkParams]
  >;
  beforeAll(() => {
    createTalk = jest.spyOn(shared, "createTalk");
  });
  beforeEach(() => {
    createTalk.mockClear();
  });
  it("rejects unauthenticated requests", async () => {
    await request(app)
      .post("/talks")
      .send({
        title: "Why web-components will rule the world",
        description: "in this essay I will..."
      })
      .expect(401);
  });
  it("requires a payload with title, description", async () => {
    await request(app)
      .post("/talks")
      .set("Cookie", ["userId=12"])
      .send({ title: "Cher" })
      .expect(422);
  });
  it("sets 'user_id' to the id of the logged-in user", async () => {
    const payload = {
      title: "React Hooks",
      description: "reall should have been called react claws"
    };
    await request(app)
      .post("/talks")
      .set("Cookie", ["userId=12"])
      .send(payload)
      .expect(200);

    expect(createTalk).toHaveBeenCalledWith({
      ...payload,
      user_id: 12
    });
  });
});

describe("DELETE /talks", () => {
  let destroyAllTalks: jest.SpyInstance<Promise<void>, []>;

  beforeAll(() => {
    destroyAllTalks = jest.spyOn(shared, "destroyAllTalks");
  });
  beforeEach(() => {
    destroyAllTalks.mockClear();
  });

  it("rejects unauthorized users", async () => {
    await request(app)
      .delete("/talks")
      .send()
      .expect(401);
  });
  it("rejects non-admin users", async () => {
    await request(app)
      .delete("/talks")
      .set("Cookie", ["userId=14"])
      .send()
      .expect(403);
    expect(destroyAllTalks).not.toBeCalled();
  });
  it("calls destroyAllTalks for admins", async () => {
    await request(app)
      .delete("/talks")
      .set("Cookie", ["userId=12"])
      .send()
      .expect(200);
    expect(destroyAllTalks).toHaveBeenCalled();
  });
});
