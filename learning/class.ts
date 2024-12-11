import { Login } from "./interface";

interface address {
  street: string;
  city: string;
  state: string;
  pin: number;
}

class Employee {
  id!: number;

  name!: string;

  address!: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.id = id;
    this.name = name;
  }

  getNameWithAddress(): string {
    return `${this.name} stay at ${this.address}`;
  }
}

let john = new Employee(1, "John", "Highway 71");

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
  getNameWithAddress(): string {
    return `${this.name} stay at ${this.address}`;
  }
}

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

let mite = new Manager(1, "Mite", "Cherise Drive");

console.log(mite.getNameWithAddress());
console.log(john);
