const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  // Title
  {
    name: "title",
    message: "What's the title of your project?",
    type: "input",
  },
];

const createTitleText = (answers) => {
  return `# ${answers.title}`;
};

const createReadmeText = (answers) => {
  return `${createTitleText(answers)}`;
};

const writeToFile = (path, data) => {
  try {
    fs.writeFileSync(path, data);
    console.log(`${path} has been created successfully.`);
  } catch (err) {
    console.log(err);
  }
};

const init = async () => {
  // Prompt questions
  const answers = await inquirer.prompt(questions);
  // Generate readme text
  const readmeText = createReadmeText(answers);
  // Create readme
  writeToFile("generated-readme.md", readmeText);
};

init();
