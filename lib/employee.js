class Employee{
    // Constructor for Employee Object
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    // Function to return employee name
    getName(){
        return this.name;
    }

    // Function to return employee id
    getId(){
        return this.id;
    }

    // Function to return employee Email
    getEmail(){
        return this.email;
    }

    // Function to return employee Role
    getRole(){
        return this.role;
    }
}

module.exports = Employee;