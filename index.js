const fs = require('fs');
const inquirer = require('inquirer');
const teamData = [];
//from portfolio generator
/* const promptEmployee = teamData => {
    if (!teamData){
        teamData = [];
    } */


const promptEmployee =  () => {
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
        type: 'list',
        name: 'role',
        message: 'What role does this employee have?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter an email address!');
                return false;
            }
        }
    }]);
};

const promptManager = (data) => {
    const roleInfo = inquirer.prompt([
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
    ]).then((roleInfo) => {
    data.officeNumber = roleInfo.officeNumber;
    teamData.push(data);
    console.log(teamData);
    });
};

const promptEngineer = (data) => {
    const roleInfo = inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: true
        }
    ]).then((roleInfo) => {
    data.github = roleInfo.github;
    teamData.push(data);
    console.log(teamData);
    });
};

const promptIntern = (data) => {
    const roleInfo = inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: true
        }
    ]).then((roleInfo) => {
    data.school = roleInfo.school;
    teamData.push(data);
    console.log(teamData);
    });
};



const promptRole = (data) => {
    switch (data.role) {
        case 'Manager':
            return promptManager(data);
            break;
        case 'Engineer':
            return promptEngineer(data);
            break;
        case 'Intern':
            return promptIntern(data);
    }
    
}

promptEmployee()
    .then((data) => {
        promptRole(data);
    });


//promptEmployee().then((data) => {console.log(data)});


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