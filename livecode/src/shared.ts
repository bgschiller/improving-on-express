export function sleep(ms: number) {
  return new Promise<void>(res => setTimeout(res, ms));
}

export interface User {
  id: number;
  isAdmin: boolean;
  username: string;
  fullName: string;
}

const ALL_USERS = [
  {
    id: 12,
    isAdmin: true,
    username: "artemisa",
    fullName: "Artemis Schiller",
    password: "cats-rule"
  },
  {
    id: 14,
    isAdmin: false,
    username: "heidela",
    fullName: "Heidi Schiller",
    password: "dogs4ever"
  }
];

export function verifyLogin(
  uname: string,
  pword: string
): Promise<User | null> {
  return sleep(10).then(() => {
    const match = ALL_USERS.find(
      user => user.username === uname && user.password === pword
    );
    if (match) return { ...match, password: undefined };
    return null;
  });
}

export function findUserById(
  userId: number
): Promise<User | null> {
  return sleep(10).then(() => {
    const match = ALL_USERS.find(user => user.id == userId);
    if (match) return { ...match, password: undefined };
    return null;
  });
}

export interface CreateTalkParams {
  user_id: number;
  title: string;
  description: string;
}
export interface Talk extends CreateTalkParams {
  id: number;
}
export function createTalk(
  talk: CreateTalkParams
): Promise<Talk> {
  return sleep(10).then(() => ({
    ...talk,
    id: 17
  }));
}

export function destroyAllTalks() {
  return sleep(10);
}
