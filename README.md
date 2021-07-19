# Team Profile Generator

<h4>Designed and coded by <a href="https://github.com/fizzaaz">FIZZA ZAIDI</a></h4>
This project was designed as a homework assignment for UT Austin coding bootcamp. This application emphasizes to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, so I also write unit tests for each part of your code and ensure that it passes all of them.

## Getting Started
🔍 To get this project up and running, the user should clone the repository from GitHub and download Node. This application also requires a file system and inquirer module. If testing is required, this application uses Jest.

* [GitHub Repository](https://github.com/fizzaaz/Team-Profile-Generator)

### Prerequisites

To install this application, you will need a text editor. I would recommend Visual Studio Code. 

### Installing

 💾 To install this code, download the zip file, or use GitHub's guidelines to clone the repository. 

### Usage

💻 type node index.js in your terminal  

 ### Contribution
👪 If you want to contribute email me at ✉️ fizz.zehra14@gmail.com.

### Summary

This application was created to generate a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html page with a style sheet. This project demonstrates use of OOP and TDD using Jest.

![](src/demo.gif)

### Goal

Your application should use Jest (Links to an external site.) for running the unit tests and Inquirer (Links to an external site.) for collecting input from the user. The application will be invoked by using the command node index.js.

### Features: 
* Classes
  Contains getter and constructor functions. Contains the concept of inheritance.
   
* Jest
  Used to test our code.
    
* Inquirer
   Used to prompt user.

### Project Requirements
* WHEN the user am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input.
* WHEN the user click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address
* WHEN the user click on the GitHub username THEN that GitHub profile opens in a new tab
* WHEN the user start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN the user enter the team manager’s name, employee ID, email address, and office number THEN the user am presented with a menu with the option to add an engineer or an     intern or to finish building my team
* WHEN the user select the engineer option THEN the user am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.
* WHEN the user select the intern option THEN the user am prompted to enter the intern’s name, ID, email, and school, and the user am taken back to the menu.
* WHEN the user decide to finish building my team THEN the user exit the application, and the HTML is generated

   
### File Strcture: 

* __tests__        
contains jest tests
  * Employee.test.js
  * Engineer.test.js
  * Intern.test.js
  * Manager.test.js
* dist               
contains rendered output (HTML). 
* lib
contains classes
* src
contains template helper code
* index.js   
runs the application
 
