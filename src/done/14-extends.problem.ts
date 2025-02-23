import { Equal, Expect } from "./helpers/type-utils";
// src/14-extends.problem.ts

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

// interface Identification {
//   id: string;
// }

// interface User extends Identification {
//   firstName: string;
//   lastName: string;
// }

// interface Post extends Identification {
//   title: string;
//   body: string;
// }

// interface Comment extends Identification {
//   comment: string;
// }

type Base = {
  id: string;
};

type User = Base & {
  firstName: string;
  lastName: string;
};

const user: User = {
  id: "1",
  firstName: "Matt",
  lastName: "Pocock",
};

console.log(user);

type Post = Base & {
  title: string;
  body: string;
};

type Comment = Base & {
  comment: string;
};

// type tests = [
//   Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
//   Expect<Equal<Post, { id: string; title: string; body: string }>>,
//   Expect<Equal<Comment, { id: string; comment: string }>>
// ];

type tests = [
  Expect<Equal<User, Base & { firstName: string; lastName: string }>>,
  Expect<Equal<User, { id: string } & { firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string } & { title: string; body: string }>>,
  Expect<Equal<Comment, { id: string } & { comment: string }>>
];
