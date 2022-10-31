// SET CONSTANTS -----------------------------------------------------------------
const router = require("express").Router();
const uniqid = require("uniqid");
const fs = require("fs");

// ATTATCH USER NOTES VAR TO THE DB
let userNotes = require("../../db/db.json");

// GET REQUEST FOR DB ------------------------------------------------------------
router.get("/", (req, res) => {
    return res.json(userNotes);
});

// SAVE A NEW NOTE ---------------------------------------------------------------
router.post("/", (req, res) => {

    // SET CONSTANTS
    const { title, text } = req.body;

    // SAVE NOTE IF THERE IS A TITLE AND A TEXT
    if(title && text) {

        const newNote = {
            title,
            text,
            id: uniqid(),
        };

        // ADD TO NOTE ARRAY FROM DB
        userNotes.push(newNote);

        // FORMAT THE NEW DATA
        var userNotes_formatted = JSON.stringify(userNotes);

        // CALL FUNCTION TO WRITE TO FILE
        writeToFile("../../db/db.json", userNotes_formatted);

    };
  
});

// DELETE A NOTE -----------------------------------------------------------------
router.delete("/:id", (req, res) => {

    // ID TO DELETE
    const idToDelete = req.params.id;

    // LOCATE ID
    const noteWithId = arr.findIndex((obj) => obj.id === idToDelete);
  
    // SPLICE NEW ARRAY
    const userNotes_AfterDelete = array.splice(noteWithId, 1);

    // FORMAT THE NEW DATA
    var userNotes_formatted = JSON.stringify(userNotes_AfterDelete);

    // CALL FUNCTION TO OVERWRITE FILE
    writeToFile("../../db/db.json", userNotes_formatted);

});

// WRITE README FILE -------------------------------------------------------------
function writeToFile(fileName, codeToPrint) {
    // console.log("writeToFile ran");
    // console.log(data);

    fs.writeFile(fileName, codeToPrint, (err) =>
      err ? console.log(err) : console.log("Successfully updated database!")
    );

}

// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;