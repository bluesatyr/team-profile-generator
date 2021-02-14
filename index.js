const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

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
    ])
    .then((data) => {
        promptRole(data);
    });
};

// create instances from inquirer data
const createTeamInstance = (data) => {
    // insure employee id of new instance is the correct number
    const employeeId = (teamData.length + 1);
    // create new class instances based on role
    let teamMember; 
    switch (data.role){
        case 'Manager':
            teamMember = new Manager(data.name, employeeId, data.email, data.officeNumber);
            break;
        case 'Engineer':
            teamMember = new Engineer(data.name, employeeId, data.email, data.github);
            break;
        case 'Intern':
            teamMember = new Intern(data.name, employeeId, data.email, data.school);
    };
    teamData.push(teamMember);
    console.log(teamData);
    return teamData;
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
            promptManager(data);
            break;
        case 'Engineer':
            promptEngineer(data);
            break;
        case 'Intern':
            promptIntern(data);
    }  
};


promptEmployee();


