// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "userName",
  "profile",
  "email",
  "projectName",
  "description",
  "install",
  "usage",
  "credits",
  "license",
  "repoKnow",
  "contributions",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      // type: "input" is the default, so won't need to put it in the objects
      message: "What is your GitHub username?",
      name: "userName",
    },
    {
      message: "What is your GitHub profile link?",
      name: "profile",
    },
    {
      message: "What is your email address?",
      name: "email",
    },
    {
      message: "What is your GitHub project's name?",
      name: "projectName",
    },
    {
      message: "Please write a short description of your project?",
      name: "description",
    },
    {
      message: "What command should be run to install dependencies?",
      name: "install",
    },
    {
      message: "Please provide instructions and examples for use.",
      name: "usage",
    },
    {
      message: "Please list your credits.",
      name: "credits",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "Unlicense", "None"],
    },
    {
      message: "What does the user need to know about using the repo?",
      name: "repoKnow",
    },
    {
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributions",
    },
  ])

  .then((response) => {
    // writeFileSync() is used for doing writeFile without having to write an error callback function
    fs.writeFile(
      "README.md",

      `
# ${response.projectName}

## Badges
https://img.shields.io/badge/license-${response.license}-cyan
        
## Description 
${response.description}
        
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [Contributions](#contributions)
- [Tests](#tests)

## Installation
${response.install}

## Usage
${response.usage}

## Credits
${response.credits}

## License
${response.license}

## Questions
Feel free to contact me for enquiries via the platforms below:
GitHub Username: ${response.userName}
Github Profile: ${response.profile}
Email: ${response.email}

## Contributions
${response.contributions}
// You can contribute via issues on my GitHub project repository which you can access in the Questions section.

## Tests
// An internal test has already been implemented in an error callback function as part of the writeFile method.
    `,
      (error) => {
        error ? console.error(error) : console.log("Success!");
      }
    );
  });
