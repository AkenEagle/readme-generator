const fs = require("fs");

const writeToFile = (path, data) => {
  try {
    fs.writeFileSync(path, data);
    console.info(`${path} has been created successfully.`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = writeToFile;
