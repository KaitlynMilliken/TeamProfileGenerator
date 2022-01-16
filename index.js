const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const team = [];

const managerQuestions = [
    {
        name: 'name',
        message: "What is your manager's name?"
    },
    {
        name: 'employeeID',
        type: 'input',
        message: "What is your manager's employee ID?"
    },
    {
        name: 'email',
        message: "What is your manager's email?"
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: "What is your manager's office number?"
    },
    {
        name: 'addEmployee',
        type: 'confirm',
        message: 'Would you like to add another employee?'
    }
];

const employeeQuestions = [{
        name: "role",
        type: 'list',
        choices: ['Intern', 'Engineer'],
        message: 'What type of employee would you like to add?'
    },{
        name: 'employeeID',
        type: 'input',
        message: "What is the employee ID?"
    },{
        name: 'name',
        message: "What is the employee's name?"
    },{
        name: 'email',
        message: "What is the employee's email?"
    },{
        name: 'school',
        message: 'Name of Intern school?',
        when: (data) => data.role === "Intern"
    },{
        name: 'github',
        message: "What is this engineer'g github?",
        when: (data) => data.role === "Engineer"
    },
    {
        name: 'addEmployee',
        type: 'confirm',
        message: 'Would you like to add another employee?'
    }
];

const buildTeam = function(){
    console.log(team);
};

const addEmployee = function () {
    inquirer.prompt(employeeQuestions).then((data) => {
        if(data.role == "Intern"){
            let {role, employeeID, name, email, school} = data;
            let intern = new Intern(employeeID, name, email, school);
            team.push(intern);

            if(data.addEmployee) addEmployee();
            else buildTeam();
        }
        else if(data.role == "Engineer"){
            let {role, employeeID, name, email, github} = data;
            let engineer = new Engineer(employeeID, name, email, github);
            team.push(engineer);

            if(data.addEmployee) addEmployee();
            else buildTeam();
        }
    });
}


inquirer.prompt(managerQuestions).then((data) => {
    let {name, employeeID, email, officeNumber} = data;
    let manager = new Manager(name, employeeID, email, officeNumber);

    team.push(manager);

    if(data.addEmployee) addEmployee();
    else buildTeam();
}).catch((err) => {
    console.log(err);
});

