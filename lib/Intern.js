const Employee = require("./Employee");

class Intern extends Employee{
    constructor(employeeId, name, email, school){
        super(name, employeeId, email);

        this.school = school;
    }

    getRole(){ 
        return "Intern"
    }
}

module.exports = Intern;