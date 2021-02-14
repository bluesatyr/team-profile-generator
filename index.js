const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const teamData = [];

/* Class Constructors */
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const MainApp = require('./lib/MainApp');

new MainApp().getTeamMember();