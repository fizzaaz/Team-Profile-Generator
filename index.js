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

//questions for manager
const mgrQuestions = [
    {
        type: "input",
        name: "id",
        message: "Enter Manager's ID: (*)",
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
        message: "Enter Manager's name: (*)",
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
        message: "Enter Manager's email address: (*)",
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
        type: 'confirm',
        name: 'newEmployee',
        message: "What you like to add another team member?",
        default: false
    }

]

const askIntern = (employee) => {
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
            type: 'confirm',
            name: 'newEmployee',
            message: "What you like to add more employee?",
            default: false
        }
    ]).then(response => {
        let emp = new intern(employee.id, employee.name, employee.email, response.school)
        teamMembers.push(emp);
        if (response.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("Team completed")
            console.log(teamMembers);
        }
    });

}



const askManager = () => {
    inquirer.prompt(mgrQuestions).then(employee => {
        let emp = new manager(employee.id, employee.name, employee.email, employee.officeNumber)
        teamMembers.push(emp);
        if (employee.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("generate html")
        }
    }
    )
}

const askEngineer = (employee) => {
    inquirer.prompt([{
        type: "input",
        name: "github",
        message: "Enter Employee's Github User name",
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
        type: 'confirm',
        name: 'newEmployee',
        message: "What you like to add more employee?",
        default: false
    }
    ]).then(response => {
        let emp = new engineer(employee.id, employee.name, employee.email, response.github)
        teamMembers.push(emp);
        if (response.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("Team completed")
            console.log(teamMembers);
        }
    });


}
const addnewEmp = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "Select the Employee's role: (*)",
            choices: ['Engineer', 'Intern', 'none']
        }).then(employee => {
            if (employee.role == "none") {
                console.log("generate html2")
            }
            else {
                inquirer.prompt([
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

                ]).then(function (emp) {
                    if (employee.role === "Engineer") {

                        askEngineer(emp);
                    }
                    else if (employee.role === "Intern") {
                        askIntern(emp);
                    }
                });
                /*   .then(employee=>
                       {
                       let emp=new engineer(employee.id,employee.name,employee.email,employee.github) 
                      teamMembers.push(emp);
                           if(employee.newEmployee)
                           {
                               addnewEmp();           
                            }
                           else
                           {
                               console.log("Team completed generate html")
                           }
                       });*/

            }
        })
}
const init = () => {
    askManager();
}

init();