const inquirer = require("inquirer");
const createReadmeText = require("./createReadme");
const writeToFile = require("./util");
const questions = require("./questions");

const init = async () => {
  // Prompt questions
  const answers = await inquirer.prompt(questions);
  // Generate readme text
  const readmeText = createReadmeText(answers);
  // Create readme
  writeToFile("GENERATED_README.md", readmeText);
};

init();
