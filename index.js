//importing required libraries for filing and prompting user
const fs = require("fs");
const inquirer = require("inquirer");

//importing classes
const manager = require('./lib/Manager')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer')

//All team members data storage
const teamMembers = [];

const questions = [
    {
        type: "input",
        name: "id",
        message: "Enter Employee's ID: (*)"
    },
    {
        type: "input",
        name: "name",
        message: "Enter Employee's name: (*)"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Employee's email address: (*)"
    },
    {
        type: "input",
        name: "id",
        message: "Select the ${'name'} role: (*)"
    }
]

function init()
{
inquirer.prompt(questions);
}

init();