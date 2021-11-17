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

const createTitleText = (title) => {
  return `# ${title}`;
};

const createReadmeText = (answers) => {
  return `${createTitleText(answers.title)}`;
};

const init = async () => {
  // Prompt questions
  const answers = await inquirer.prompt(questions);
  // Generate readme text
  const readmeText = createReadmeText(answers);
  // Create readme
  fs.writeFile("generated-readme.md", `${readmeText}`, (err) => {
    if (err) throw err;
    console.log("Your readme has been generated succesfully.");
  });
};

init();
