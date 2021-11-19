const createTitleText = (answers) => {
  return `${answers.title}`;
};

const createDescriptionText = (answers) => {
  return `${answers.description}`;
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
  return `## Usage
    
To test the application:
        
\`\`\`
${answers.test}
\`\`\``;
};

const createContributingText = (answers) => {
  return `## Contributing
  
${answers.contributing}`;
};

const createLicenseText = (answers) => {
  return `## License
  
${answers.license}`;
};

const createUsernameText = (answers) => {
  return `## GitHub Username
    
${answers.github}`;
};

const createReadmeText = (answers) => {
  return `# ${createTitleText(
    answers
  )} ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)

## Table of Contents
  
  - [Description](#description)${
    answers.installation ? "\n  - [Installation](#installation)" : ""
  }
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
## Description
  
${createDescriptionText(answers)}
  
${answers.installation ? createInstallationText(answers) : ""}

${answers.installation ? createTestText(answers) : ""}

${answers.installation ? createUsageText(answers) : ""}
  
${createContributingText(answers)}
  
${createLicenseText(answers)}

${createUsernameText(answers)}`;
};

module.exports = createReadmeText;
