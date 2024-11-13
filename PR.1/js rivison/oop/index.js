class Employee {
    constructor(name, EmployeeId, position, salary) {
        this.name = name;
        this.EmployeeId = EmployeeId;
        this.position = position;
        this.salary = salary;
        this.leaveDays = 1;
    }

    giveRaise(amount) {
        this.salary += amount; 
        console.log(`${this.name}'s new salary: ${this.salary}`);
    }

    takeLeave(days) {
        this.leaveDays += days;  
        console.log(`${this.name} has taken ${days} leave days. Total leave: ${this.leaveDays}`);
    }

    employeeInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Employee ID: ${this.EmployeeId}`);
        console.log(`Position: ${this.position}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Leave days taken: ${this.leaveDays}`);
    }
}

let employee1 = new Employee("Yug Sakariya", "2454", "Web Developer", 85000);

employee1.employeeInfo();
employee1.giveRaise(10000);
employee1.takeLeave(10);
console.log(employee1);
