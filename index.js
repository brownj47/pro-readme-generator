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
        type: 'list',
        message: 'Please select the license you would like to use for your project.',
        name: 'license',
        choices: ['a', 'b']
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
function write(data) {
    fs.writeFile('readedadfasdf.md',
 `# ${data.title}

  ## Description

  ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Badges](#badges)
  - [How to Contribute](#How-to-Contribute)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
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
function init() {
    inquirer.prompt(
        questions
    ).then(write)
}

// Function call to initialize app
init();

