// creates license badge
function renderLicenseBadge(license) {
  if (license != 'none') {
    return `[![Licence:${license}](https://img.shields.io/badge/License-${license}-red.svg)](${renderLicenseLink(
      license)})`;
  } else { return ``
  }
}

// creates license link
function renderLicenseLink(license) {
  if (license === 'Apache_2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'BSD_2--Clause') {
    return `https://opensource.org/licenses/BSD-2-Clause`
  } else if (license === 'BSD_3--Clause') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else if (license === 'Boost_1.0') {
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license === 'CC0_1.0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  } else if (license === 'EPL_1.0') {
    return `https://opensource.org/licenses/EPL-1.0`
  } else if (license === 'AGPL_v3') {
    return `https://www.gnu.org/licenses/agpl-3.0`
  } else if (license === 'GPL_v2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  } else if (license === 'MPL_2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (license === 'Unlicense') {
    return `http://unlicense.org/`
  } else {return ``
  }
}

// creates a section in the README for the license, if no license is selected then a section will not be created
function renderLicenseSection(license) {
  if (license != 'none') {
    return `## License
    This project is protected under the ${license} license. To learn more about this license, please click the following; [${license}](${renderLicenseLink(license)})`
  } else { return ``
  }
}

// Generates a markdown for the README
const generateMarkdown = ({title, description, install, usage, guideline, test, github, email, license}) => 
`# ${title}

${renderLicenseBadge(license)}

# Table of Contents
1. [Description](#Description)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Contributing](#Contributing)
1. [Tests](#Tests)
1. [Questions](#Questions)
1. [License](#License)

## Description
${description}

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
* ${email}

${renderLicenseSection(license)}`;

module.exports = generateMarkdown;
