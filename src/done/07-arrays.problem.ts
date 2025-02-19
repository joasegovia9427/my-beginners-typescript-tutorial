interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  // posts: Post[]; // option 1
  // posts: Posts; // option 2
  posts: Array<Post>; // option 2
}

const myPostOption1: Post[] = [
  {
    id: 1,
    title: "How I eat so much cheese",
  },
  {
    id: 2,
    title: "Why I don't eat more vegetables",
  },
];

// type Posts = Array<Post>;

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};
