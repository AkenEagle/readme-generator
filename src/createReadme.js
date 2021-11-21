// Create individual title and description texts

const createTitleText = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=green)`;
};

const createDescriptionText = (answers) => {
  return `## Description

${answers.description}`;
};

const createInstallationText = (answers) => {
  return `## Installation
  
Run the following script to install the packages required for the application:
      
\`\`\`
${answers.installationText}
\`\`\``;
};

const createUsageText = (answers) => {
  return `## Usage
  
To use the application run the following script:
      
\`\`\`
${answers.usage}
\`\`\``;
};

const createTestText = (answers) => {
  return `## Testing
    
To test the application:
        
\`\`\`
${answers.test}
\`\`\``;
};

const createContributingText = (answers) => {
  return `## Contributing

To contribute the project:

\`\`\`
${answers.contributing}
\`\`\``;
};

const createLicenseText = (answers) => {
  return `## License
  
${answers.license}`;
};

const createScreenshotText = (answers) => {
  return `## Preview

![preview](${answers.screenshot})`;
};

const createQuestionsText = (answers) => {
  return `## Questions
    
GitHub: [${answers.github}](https://github.com/${answers.github})\\
Email: ${answers.email}`;
};

const createTableOfContents = (answers) => {
  return `## Table of Contents
  
  - [Description](#description)${
    answers.installation
      ? "\n- [Installation](#installation)\n- [Usage](#usage)\n- [Testing](#testing)\\"
      : ""
  }
  - [License](#license)
  - [Contact](#contact)
  - [Contributing](#contributing)${
    answers.hasScreenshot ? "\n- [Preview](#preview)" : ""
  }`;
};

// Create the readme text

const createReadmeText = (answers) => {
  return `${createTitleText(answers)}

${createTableOfContents(answers)}
  
${createDescriptionText(answers)}
  
${answers.installation ? createInstallationText(answers) : ""}

${answers.installation ? createTestText(answers) : ""}

${answers.installation ? createUsageText(answers) : ""}
  
${createContributingText(answers)}
  
${createLicenseText(answers)}

${createQuestionsText(answers)}

${answers.hasScreenshot ? createScreenshotText(answers) : ""}`;
};

module.exports = createReadmeText;
