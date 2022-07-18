// TODO: Include packages needed for this application

const genMark = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'Please enter the title for your project.',
        name: 'Title',
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
        name: 'cont-guide',
    },
    {
        type: 'input', 
        message: 'Please enter any test instructions for your project.',
        name: 'test-inst',
    },
    {
        type: 'input', 
        message: 'Please enter any test instructions for your project.',
        name: 'test-inst',
    },
    {
        type: 'input', 
        message: 'Please enter the license you would like to use for your project.',
        name: 'license',
    },
    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // description, installation instructions, usage information, contribution guidelines, and test instructions
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
}

// Function call to initialize app
init();
