type User = {
  name: string;
  age: number;
  password: string | number; // Union type
  address?: {
    street: string;
    city: string;
    state: string;
    zipcode: number;
  }[];
};

const user: User = {
  name: "John",
  age: 30,
  password: "1234",
  address: [
    {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipcode: 10001,
    },
  ],
};

function addUser(newUser: User): void {
  if (!newUser.name || !newUser.password) {
    console.log("User name and password are required");
    return;
  }
  console.log(newUser);
}
