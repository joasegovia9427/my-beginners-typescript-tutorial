interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  // this is a union type::
  role: Role;
}
type Role = "admin" | "user" | SuperAdmin | { wow: boolean };

type SuperAdmin = "super-admin";

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // // @ts-expect-error
  // role: "I_SHOULD_NOT_BE_ALLOWED",
  role: "super-admin",
  // role: { wow: true },
};
