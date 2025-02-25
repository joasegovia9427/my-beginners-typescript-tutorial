import { Equal, Expect } from "../helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

//First solution with pick - this has autocomplete
type MyType = Pick<User, "firstName" | "lastName">;

//Second solution with omit
type MyType2 = Omit<User, "id">;

// experiment
type toPick = {
  firstName: string;
  lastName: string;
};
type MyType3 = Pick<User, keyof toPick>;

type tests = [
  Expect<Equal<MyType, { firstName: string; lastName: string }>>,
  Expect<Equal<MyType2, { firstName: string; lastName: string }>>,
  Expect<Equal<MyType3, { firstName: string; lastName: string }>>
];
