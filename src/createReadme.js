const createTitleText = (answers) => {
  return `${answers.title}`;
};

const createDescriptionText = (answers) => {
  return `${answers.description}`;
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
  
## Installation
  
Run the following script to install the packages required for the application:
  
\`\`\`
ADD TEXT HERE
\`\`\`
  
## Usage
  
To use the application run the following script:
  
\`\`\`
ADD TEXT HERE
\`\`\`
  
## Contributing
  
ADD TEXT HERE
  
## License
  
ADD TEXT HERE`;
};

module.exports = createReadmeText;
