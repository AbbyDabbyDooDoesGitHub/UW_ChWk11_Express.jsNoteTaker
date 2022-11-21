// SET CONSTANTS -----------------------------------------------------------------
const fs     = require("fs");

// WRITE README FILE -------------------------------------------------------------
function writeToFile(fileName, codeToPrint) {
    console.log("writeToFile ran");

    fs.writeFile(fileName, codeToPrint, (err) =>
      err ? console.log(err) : console.log("Successfully updated database!")
    );

}

// EXPORT WRITEFILE --------------------------------------------------------------
module.exports = writeToFile;