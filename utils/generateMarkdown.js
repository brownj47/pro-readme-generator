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
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.desc}
  
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
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

  Github: ${data.github}
  Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
