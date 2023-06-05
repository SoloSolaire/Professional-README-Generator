// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please add a description to your README.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please add installation instructions.',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Please add usage information.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please add contribution guidelines.',
            name: 'guideline'
        },
        {
            type: 'input',
            message: 'Please add test instructions.',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email'
        }

    ])
    .then((data) => {
        const markdownPageContent = generateMarkdown(data);

        fs.writeFile('sample.md', markdownPageContent, (err) =>
         err ? console.log(err) : console.log('README created!')
         );
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
