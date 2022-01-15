const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee');

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
    fs.writeFile('./dist/index/html');
};

const addEmployee = function () {
    inquirer.prompt(employeeQuestions).then((data) => {
        //team.push(data)
        if(data.addEmployee){
            addEmployee();
        }
        else{
           // buildTeam();
        }
    });
}


inquirer.prompt(managerQuestions).then((data) => {
    let manager = new Employee(data);

    console.log(manager);

    if(data.addEmployee){
        addEmployee();
    }
    else{
        //buildTeam();
    }
}).catch((err) => {
    console.log(err);
});

