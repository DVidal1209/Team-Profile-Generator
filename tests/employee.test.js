const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a Name, ID, email and role", () => {
            const employee = new Employee("Joshua", "153AC", "joshua@test.com");

            expect(employee.name).toEqual("Joshua");
            expect(employee.id).toEqual("153AC");
            expect(employee.email).toEqual("joshua@test.com");
            expect(employee.role).toEqual("Employee");
        });
    })
    describe("Return Functions", () =>{
        it("should return Name, Id, Email and Role when return functions are called", () => {
            const employee = new Employee("Joshua", "153AC", "joshua@test.com");
            const email = employee.getEmail();
            const id = employee.getId();
            const name = employee.getName();
            const role = employee.getRole();

            expect(name).toEqual("Joshua");
            expect(id).toEqual("153AC");
            expect(email).toEqual("joshua@test.com");
            expect(role).toEqual("Employee");
        })
    })
})