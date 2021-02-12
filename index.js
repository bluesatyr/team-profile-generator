const fs = require('fs');
const inquirer = require('inquirer');

//from portfolio generator
const promptEmployee = teamData => {
    if (!teamData.employees){
        teamData.employees = [];
    }
    
    console.log(`
===================
Add a New Employee
===================
`)
    return inquirer.prompt([
// An array of questions for user input with inquirer
    {
        type: 'name',
        name: 'name',
        message: "What is the employee's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter the employee's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your email address!');
                return false;
            }
        }
    },
    {   // for intern if intern is chosen
        type: 'input',
        name: 'school',
        message: 'What is the name of your school? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter the name of your School!');
                return false;
            }
        }
    },
    {   // for engineer if engineer chosen
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your GitHub Username!');
                return false;
            }
        }
    },
    {   // for manager if manager chosen
        type: 'input',
        name: 'officeNumber',
        message: 'What is your Office Number (Required):',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Office Number!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]);

// call inquire to run CLI answers - promptUser()
// use answers to construct newEmployee classes based on roles
// id is determined by index of member +1? employee.id = members.length; then -> members.push(member)
// use new Classes to generate cards for the HTML
// generateHTML then write file and move to dist 






/* promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
  */