class Employee {
    constructor(name, employeeId, position, salary) {
        this.name = name;
        this.employeeId = employeeId;
        this.position = position;
        this.salary = salary;
        this.leaveDays = 1; 
    }

    giveRaise(amount) {
        this.salary += amount;
        console.log(`${this.name}'s new salary after raise: ${this.salary}`);
    }

    takeLeave(days) {
        this.leaveDays += days;
        console.log(`${this.name} has taken ${days} leave days. Total leave days taken: ${this.leaveDays}`);
    }

    EmployeeInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Position: ${this.position}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Leave Days Taken: ${this.leaveDays}`); 
    }
}

let employee1 = new Employee("yugsakariya", "8787", "Software Engineer", 75000);
let employee2 = new Employee("prit", "2222", "Web Developer", 50000);

employee2.EmployeeInfo();
employee1.EmployeeInfo();
employee1.giveRaise(1000);
employee1.takeLeave(5); 
