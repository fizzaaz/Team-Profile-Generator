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
        message: "Enter Employee's ID: (*)",
        validate: validID => {
            if (validID) {
                let id = parseInt(validID);
                if (Number.isInteger(id)) {
                    return true;
                }
                else {
                    console.log("ID must be 0-9 digits only");
                    return false;

                }
            }
            else {
                console.log("ID is required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "name",
        message: "Enter Employee's name: (*)",
        validate: validName => {
            if (validName) {
                let letters = /^[A-Za-z]+$/;
                if (validName.match(letters)) {
                    return true;
                }
                else {
                    console.log("Name should have alphabets only")
                    return false;
                }

            }
            else {
                console.log("Employee's name is required");

                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter Employee's email address: (*)",
        validate: validEmail=>
        {
            if(validEmail)
            {
                let email=/\S+@\S+\.\S+/;
                if(validEmail.match(email))
                {
                    return true;
                }
                else{
                    console.log("Invalid Emaill Address");

                }

            }
            else
            {
console.log("Email is required!");
return false;
            }

        }
    },
    {
        type: "checkbox",
        name: "role",
        message: "Select the Employee's role: (*)",
        choices: ['Engineer', 'Manager', 'Intern']
    }
]

const init = () => {
    inquirer.prompt(questions);
}

init();