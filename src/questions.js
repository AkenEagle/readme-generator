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
  //   Installation description
  {
    name: "installationText",
    message: "What's the installation process?",
    type: "input",
    when: (answers) => answers.installation,
  },
  //   Usage
  {
    name: "usage",
    message: "How does a user use your application?",
    type: "input",
    when: (answers) => answers.installation,
  },
  //   Testing
  {
    name: "test",
    message: "How does a user test your application?",
    type: "input",
    when: (answers) => answers.installation,
  },
  // License
  {
    name: "license",
    message: "What's your project's license?",
    type: "list",
    choices: ["MIT", "GPLv2", "Apache"],
    default: "MIT",
  },
  //   Github username
  {
    name: "github",
    message: "What is your github username?",
    type: "input",
  },
  //   Email
  {
    name: "email",
    message: "What is your email?",
    type: "input",
  },
  //   Contributions
  {
    name: "contributing",
    message: "How does a user contribute to your project?",
    type: "input",
  },
  //   Screenshot?
  {
    name: "hasScreenshot",
    message: "Do you have a preview screenshot of your project?",
    type: "confirm",
    default: "false",
  },
  //   Screenshot
  {
    name: "screenshot",
    message: "Type the link of your preview screenshot",
    type: "input",
    when: (answers) => answers.hasScreenshot,
  },
];

module.exports = questions;
