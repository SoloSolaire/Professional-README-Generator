// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, descprition, install, usage, guideline, test, github, email}) => 
`# ${title}

# Table of Contents
1. [Description](#Description)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Contributing](#Contributing)
1. [Tests](#Tests)
1. [Questions](#Questions)

## Description
${descprition}

## Installation
${install}

## Usage
${usage}

## Contributing
${guideline}

## Tests
${test}

## Questions
If you have additional questions, please feel free to contact me via my GitHub or e-mail.
* [${github}'s GitHub Profile](https://github.com/${github})
* ${email}`;

module.exports = generateMarkdown;
