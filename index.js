// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Imported from the utils folder
const generateMarkdown = require('./utils/generateMarkdown')

// An array of questions for user input
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
        },
        {
            type: 'list',
            message: 'What license best fits for your code?',
            choices: [
                'Apache_2.0',
                'GPLv3',
                'MIT',
                'BSD_2--Clause',
                'BSD_3--Clause',
                'Boost_1.0',
                'CC0_1.0',
                'EPL_1.0',
                'AGPL_v3',
                'GPL_v2',
                'MPL_2.0',
                'Unlicense',
                'None'
                    ],
            name: 'license'
        }
    ])

    // A function to write the README file
    .then((data) => {
        const markdownPageContent = generateMarkdown(data);

        fs.writeFile('sample.md', markdownPageContent, (err) =>
         err ? console.log(err) : console.log('README created!')
         );
    })