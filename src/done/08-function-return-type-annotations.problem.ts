import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  posts: Array<Post>;
}

type Role = "admin" | "user" | "super-admin";

interface Post {
  id: number;
  title: string;
}

const userToReturn: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "user",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
  ],
};

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => userToReturn;
// const makeUser = (): User => {
//   return {
//     id: 1,
//     firstName: "Matt",
//     lastName: "Pocock",
//     role: "super-admin",
//     posts: [
//       {
//         id: 1,
//         title: "How I eat so much cheese",
//       },
//     ],
//   };
// };

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
