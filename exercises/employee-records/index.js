var employees = [];

function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name; 
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status
    this.printEmployeeForm = function (){
        return "Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + "/hour, Status: " + this.status 
    }
}

var emp1 = new Employee("Jordan", "Software Intern", 20);
var emp2 = new Employee("James", "Professional Soccer Player", 50, "Part Time");
var emp3 = new Employee ("Jacob", "Video Game Player", 60, "Full Time");

employees.push(emp1)
employees.push(emp2)
employees.push(emp3)

console.log(employees);
console.log(emp1.printEmployeeForm());
console.log(emp2.printEmployeeForm());
console.log(emp3.printEmployeeForm());