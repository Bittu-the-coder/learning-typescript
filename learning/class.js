"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getNameWithAddress() {
        return `${this.name} stay at ${this.address}`;
    }
}
let john = new Employee(1, "John", "Highway 71");
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} stay at ${this.address}`;
    }
}
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
let mite = new Manager(1, "Mite", "Cherise Drive");
console.log(mite.getNameWithAddress());
console.log(john);
