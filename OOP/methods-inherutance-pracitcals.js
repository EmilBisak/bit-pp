function Person (name, surname) {
    this.name = name;
    this.surname = surname;
};

function Employee (name, surname, job, salary) {
    this.job = job;
    this.salary = salary;
    Person.call(this,name,surname)
};

function Developer (name, surname, job, salary, specialization) {
    this.specialization = specialization;
    Employee.call(this,name, surname, job, salary);
};

function Manager (name, surname, job, salary, departmant) {
    this.departmant = departmant;
    Employee.call(this,name, surname, job, salary);
};

Developer.prototype.getSpecialization = function() {
    console.log(this.specialization);
};

Manager.prototype.getDepartment = function() {
    console.log(this.departmant);
};

Manager.prototype.changeDepartmant = function(newValue) {
    this.departmant = newValue;
};

Employee.prototype.getData = function() {
    return this.name + ", " + this.surname + ", " + this.salary; 
};

Employee.prototype.getSalary = function() {
    console.log(this.salary);
};

Employee.prototype.increaseSalary = function() {
    return this.salary *= 1.1;
};
