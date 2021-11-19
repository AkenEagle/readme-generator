const licenses = ["MIT", "GPLv2", "Apache"];

const questions = [
  // Title
  {
    name: "title",
    message: "What's the title of your project?",
    type: "input",
  },
  // Description
  {
    name: "description",
    message: "Type a description for your readme",
    type: "input",
  },
  //   Needs Installation?
  {
    name: "installation",
    message: "Does your project require an installation?",
    type: "confirm",
    default: "true",
  },
  {
    name: "installationText",
    message: "What's the installation process?",
    type: "input",
    when: (answers) => answers.installation,
  },
  {
    name: "usage",
    message: "How does a user use your application?",
    type: "input",
    when: (answers) => answers.installation,
  },
  {
    name: "test",
    message: "How does a user test your application?",
    type: "input",
    when: (answers) => answers.installation,
  },
  {
    name: "contributing",
    message: "How does a user contribute to your project?",
    type: "input",
  },
  {
    name: "license",
    message: "What's your project's license?",
    type: "list",
    choices: licenses,
    default: "MIT",
  },
  //   Github username
  {
    name: "github",
    message: "What is your github username?",
    type: "input",
  },
];

module.exports = questions;
