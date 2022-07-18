// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
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
        type: 'input',
        message: 'Please enter the license you would like to use for your project.',
        name: 'license',
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

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then(write)
}

// Function call to initialize app
init();

function write(data) {
    fs.writeFile('readedadfasdf.md',
 `# ${data.title}

  ## Description

  ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation

  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  
  ## Badges
  
  ## How to Contribute

  ${data.contrib}
  
  ## Tests

  ${data.test}

  ## Questions 

  Github: [${data.github}](${data.github})
  
  Email: [${data.email}](${data.email})`

        , function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('Yay!')
            }
        })

}
