//importing required libraries for filing and prompting user
const fs=require("fs");
const inquirer=require("inquirer");

//importing classes
const manager=require('./lib/Manager')
const intern=require('./lib/Intern')
const engineer=require('./lib/Engineer')

//All team members data storage
const teamMembers=[];


