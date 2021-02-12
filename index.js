const fs = require('fs');
const inquirer = require('inquirer');

let teamMembers = []; // can use const?

// An array of questions for user input with inquirer
const questions = [
    {
        type: 'name',
        name: 'name',
        message: 'What is your GitHub Username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Project Title!');
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
                console.log('Please Enter your Project Title!');
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
                console.log('Please Enter your Project Title!');
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
                console.log('Please Enter your Project Title!');
                return false;
            }
        }
    },
    {   // for manager if manager chosen
        type: 'input',
        name: 'officeNumber',
        message: 'Provide a description of your project (Required):',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Project description!');
                return false;
            }
        }
    },
];

// call inquire to run CLI answers
// get/store answers object for each member

// use the member object to create instances of the appropriate class
// id is determined by index of member +1? employee.id = members.length; then -> members.push(member)



