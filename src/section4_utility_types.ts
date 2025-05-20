// TASK:
// Define a `User` type with `id`, `name`, and `email`
// Create the following:
// - a `Partial<User>`
// - a `Readonly<User>`
// - a `Pick<User, "name">`

// Your code here 👇

type User = {
  id: number;
  name: string;
  email: string;
};

const partialUser: Partial<User> = {
  id: 1,
  name: "Ada",
};

const readonlyUser: Readonly<User> = {
  id: 2,
  name: "Grace",
  email: "grace@example.com",
};

const pickUser: Pick<User, "name"> = {
  name: "Alan",
};
