const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const teamData = [];

/* Class Constructors */
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');


// Initial set of questions common to all employees
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
    }
    ]).then((data) => {
        promptRole(data);
    });
};

// create instances from inquirer data
const createTeamInstance = (data) => {
    // insure employee id of new instance is the correct number
    const employeeId = (teamData.length + 1);
    // create new class instances based on role 
    switch (data.role){
        case 'Manager':
            let manager = new Manager(data.name, employeeId, data.email, data.officeNumber);
            teamData.push(manager);
            console.log(teamData);
            return teamData;
            break;
        case 'Engineer':
            let engineer = new Engineer(data.name, employeeId, data.email, data.github);
            teamData.push(engineer);
            console.log(teamData);
            return teamData;
            break;
        case 'Intern':
            let intern = new Intern(data.name, employeeId, data.email, data.school);
            teamData.push(intern);
            console.log(teamData);
            return teamData;
            break;
    };
    
};

// More questions for those who have Manager role
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
        const result = createTeamInstance(data);
        if (roleInfo.confirmAddEmployee) {
            return promptEmployee();
        } else {
            return result;
        }
    });
};

// More questions for those who have Engineer role
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
        const result = createTeamInstance(data);
        if (roleInfo.confirmAddEmployee) {
            return promptEmployee();
        } else {
            return result;
        }
    });
};

// More questions for those who have Intern role
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
        const result = createTeamInstance(data);
        if (roleInfo.confirmAddEmployee) {
            return promptEmployee();
        } else {
            return result;
        }
    });
};


// prompt user for more questions depending on employee role 
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
};



promptEmployee();



/*
promptEmployee -> return data
promptRole -> promptManager, promptEngineer OR promptIntern -> add roleInfo to data
createInstance -> takes data and creates a new instance of correct role saving it to teamData array
generateHTML & generateCard -> takes instances in the teamData and creates cards based on each instance
writeFile and copyFile creates the html file in dist/ and moves a copy of CSS to dist/
*/



// .then((data) => {console.log(data)});
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

