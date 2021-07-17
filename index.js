//importing required libraries for filing and prompting user
const fs = require("fs");
const inquirer = require("inquirer");

//importing classes
const manager = require('./lib/Manager')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer');
const { type } = require("os");

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
                    console.log("Must be 0-9 digits only");
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
        validate: validEmail => {
            if (validEmail) {
                //string@anystring.any stringS 
                let email = /\S+@\S+\.\S+/;
                if (validEmail.match(email)) {
                    return true;
                }
                else {
                    console.log("Invalid Emaill Address");

                }

            }
            else {
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
const askManagerQuestion = (employee) => {
    inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number ",
            validate: validOffNumber => {
                if (validOffNumber) {
                    let num = parseInt(validOffNumber);
                    if (Number.isInteger(num)) {
                        return true;
                    }
                    else {
                        console.log("Must be 0-9 digits only");
                        return false;

                    }
                }
                else {
                    console.log("Office Number is required!");
                    return false;
                }
            }

        },
        {
            type:'confirm',
            name:'newEmployee',
            message: "What you like to add more employee?",
            default: false            
        }
    ]).then(response=>
        {
            let emp=new manager(employee.id,employee.name,employee.email,response.officeNumber) 
           teamMembers.push(emp);
            if(response.newEmployee)
            {
                addTeamMember();           
             }
            else
            {
                console.log("Team completed")
            }
        });
}

const askEngineerQuestion = (employee) => {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter Engineer's Github User name",
            validate: validGithub => {
                if (validGithub) {
                    return true;
                }

                else {
                    console.log("Github username is Required!")
                    return false;
                }
            }
        },
            {
                type:'confirm',
                name:'newEmployee',
                message: "What you like to add more employee?",
                default: false            
            }
        ]).then(response=>
            {
            let emp=new engineer(employee.id,employee.name,employee.email,response.github) 
           teamMembers.push(emp);
                if(response.newEmployee)
                {
                    addTeamMember();           
                 }
                else
                {
                    console.log("Team completed")
                }
            });
}

const askInternQuestion = (employee) => {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Enter Intern's School name",
            validate: validIntern => {
                if (validIntern) {
                    let letters = /^[A-Za-z]+$/;
                    if (validIntern.match(letters)) {
                        return true;
                    }
                    else {
                        console.log("School Name should have alphabets only")
                        return false;
                    }
                }
                else {
                    console.log("Intern's School name is Required!")
                    return false;
                }
            }
        },
        {
            type:'confirm',
            name:'newEmployee',
            message: "What you like to add more employee?",
            default: false            
        }
    ]).then(response=>
        {
           let emp=new intern(employee.id,employee.name,employee.email,response.school) 
           teamMembers.push(emp);
            if(response.newEmployee)
            {
                addTeamMember();           
             }
            else
            {
                console.log("Team completed")
                console.log(teamMembers);
            }
        });
       
}



const addTeamMember = () => {
    inquirer.prompt(questions).then(employee => {
        if (employee.role == "Manager") {
            askManagerQuestion();
        }
        else if (employee.role == "Engineer") {
            askEngineerQuestion();
        }
        else if (employee.role == "Intern") {
            askInternQuestion(employee);
        }
    }
    )
}


const init = () => {
    addTeamMember();
}

init();