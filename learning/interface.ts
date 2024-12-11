interface User {
  name: string;
  age?: number; // Optional property, as denoted by "?"
  id: number;
  email: string; // Shouldn't be an empty string; consider adding validation
}

let user: User = {
  name: "John",
  id: 1,
  email: "john@example.com", // Added a valid email
};

interface Employee extends User {
  salary: number;
}

let employee1: Employee = {
  name: "John",
  id: 1,
  email: "john@example.com",
  salary: 1000,
};

export interface Login {
  Login(): User;
}
