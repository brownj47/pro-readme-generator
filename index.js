//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const axios = require('axios')


// an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the title for your project.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please input a short description for your project.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Please enter any installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter any usage instructions for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter any contribution guidelines for your project.',
        name: 'contrib',
    },
    {
        type: 'input',
        message: 'Please enter any test instructions for your project.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please select the license you would like to use for your project.',
        name: 'license',
        choices: ['bsd-3-clause', 'lgpl-2.1', 'bsd-2-clause','mpl-2.0','unlicense','bsl-1.0','cc0-1.0','epl-2.0','gpl-3.0','apache-2.0','mit','gpl-2.0','agpl-3.0']
    },
    {
        type: 'input',
        message: 'Please enter your github username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    },
];

// function to wirite the markdown
function write(data, licenseText) {
    fs.writeFile('README.md',
`# ${data.title}

## Description

${data.desc}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)- [License](#license)
- [Badges](#badges)
- [How to Contribute](#How-to-Contribute)
- [Tests](#Tests)
- [Questions](#Questions)
  
## Installation

${data.installation}
  
## Usage
${data.usage}

## License
${licenseText}
  
## Badges

![License Badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=green)

## How to Contribute

${data.contrib}
  
## Tests

${data.test}

## Questions 

Github: [${data.github}](https://github.com/${data.github})

If you have any questions, you can reach me at: [${data.email}](mailto:${data.email})`

        , function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('Yay!')
            }
        })

}
// function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then(function (response) {
        const ansObj = response
        console.log(ansObj)
        const license = ansObj.license
        axios.get(`https://api.github.com/licenses/${license}`) //get license text from github
            .then(function (response) {
                // handle success
                const licenseText = response.data.body;
                write(ansObj, licenseText);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })
}

// Function call to initialize app
init();

