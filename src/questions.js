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
];

module.exports = questions;
