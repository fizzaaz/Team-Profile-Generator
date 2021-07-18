//importing required libraries for filing and prompting user
const fs = require("fs");
const inquirer = require("inquirer");

//importing classes
const manager = require('./lib/Manager')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer');
const Employee = require("./lib/Employee");


//All team members data storage
const teamMembers = [];
const Role=[]; 
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
        Role.push("Intern")
        if (response.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("Team completed")
            console.log(teamMembers);
            createHtml(teamMembers);   
        }
    });

}



const askManager = () => {
    inquirer.prompt(mgrQuestions).then(employee => {
        let emp = new manager(employee.id, employee.name, employee.email, employee.officeNumber)
        teamMembers.push(emp);
        Role.push("Manager")
        if (employee.newEmployee) {
            addnewEmp();
        }
        else {
            createHtml(teamMembers);   
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
        Role.push("Engineer")

        if (response.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("Team completed")
            console.log(teamMembers);
            createHtml(teamMembers);   
          
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
                createHtml(teamMembers);
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
              

            }
        })
}

const addManagerCard=(team)=>
{
    let e=new manager(team.id,team.name,team.email,team.officeNumber)

    return addEmployeecard(e)+`
   
          Office Number: ${e.getOfficeNumber()}
        </div>
      </div>
    </div>
  </div> `
}
const addEngineerCard=(team)=>
{
    let e=new engineer(team.id,team.name,team.email,team.github)

    return addEmployeecard(e)+`
                <div class="employee-entry border border-secondary bg-white">
                  GitHub: <a href="https://github.com/${e.getGithub()}" target="_blank">${e.getGithub()}</a>
                </div>
              </div>
            </div>
          </div>`
}
const addEmployeecard=(e)=>
{
    return ` <div class="col-lg-4 mb-4">
    <div class="card employee-card">
      <div class="card-header employee-header bg-info text-white">
        <h4>${e.getName()}</h4>
        <h5><i class="fas fa-user-graduate "></i> ${e.getRole()}</h5>
      </div>
      <div class="card-body bg-light">
        <div class="employee-entry border border-secondary bg-white ">
          ID: ${e.getId()}
        </div>
        <div class="employee-entry border-right border-left border-secondary bg-white">
          Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a>
        </div>
        <div class="employee-entry border border-secondary bg-white">`
}
const addInternCard=(team)=>
{
    let e=new intern(team.id,team.name,team.email,team.school)

    return  addEmployeecard(e)+`   
            School: ${e.getSchool()}
            </div>
            </div>
          </div>
        </div>
  `
}
const renderHtml=(teamMembers)=>
{
    let starthtml=`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team Roster</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    </head>
    
    <body>
      <header class="jumbotron text-center my-team-header bg-info text-white">
        <h1>My Team Roster</h1>
      </header>
      <main class="container ">
        <div class="row justify-content-center">
         `
    let endHtml=` </main>
    </body>
   </html>`
    for(let i=0;i<teamMembers.length;i++)
    {
        
     if(Role[i]==="Intern")
        {

            starthtml+=addInternCard(teamMembers[i]);
        }
        else if(Role[i]==="Engineer")
        {        
            let e=new engineer("a","b","c","d")
            starthtml+=addEngineerCard(teamMembers[i],e.getRole());
        }
        else 
        {
            let e=new manager("a","b","c","d")

            starthtml+=addManagerCard(teamMembers[i],e.getRole());
        }
    
          
       
     

    }
    return  starthtml+endHtml;
}
const createHtml=(teamMembers)=>
{
    fs.writeFile("./dist/team.html", renderHtml(teamMembers), err=> {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}
const init = () => {
    askManager();
}

init();