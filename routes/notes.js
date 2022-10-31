// SET CONSTANTS -----------------------------------------------------------------
const router = require("express").Router();
const uniqid = require("uniqid");
const fs     = require("fs");

// ATTATCH USER NOTES VAR TO THE DB
let notes = require("../db/db.json");

// GET REQUEST FOR DB ------------------------------------------------------------
router.get("/", (req, res) => {
    console.log("notes.js router.get ran");

    return res.json(notes);
});

// SAVE A NEW NOTE ---------------------------------------------------------------
router.post("/", (req, res) => {
    console.log("notes.js router.post ran");

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
        notes.push(newNote);

        // FORMAT THE NEW DATA
        var notes_formatted = JSON.stringify(notes);

        // CALL FUNCTION TO WRITE TO FILE
        writeToFile("../db/db.json", notes_formatted);

    };
  
});

// DELETE A NOTE -----------------------------------------------------------------
router.delete("/:id", (req, res) => {
    console.log("notes.js router.delete ran");

    // ID TO DELETE
    const idToDelete = req.params.id;

    // LOCATE ID
    const noteWithId = arr.findIndex((obj) => obj.id === idToDelete);
  
    // SPLICE NEW ARRAY
    const notes_AfterDelete = array.splice(noteWithId, 1);

    // FORMAT THE NEW DATA
    var notes_formatted = JSON.stringify(notes_AfterDelete);

    // CALL FUNCTION TO OVERWRITE FILE
    writeToFile("../db/db.json", notes_formatted);

});

// WRITE README FILE -------------------------------------------------------------
function writeToFile(fileName, codeToPrint) {
    console.log("writeToFile ran");

    fs.writeFile(fileName, codeToPrint, (err) =>
      err ? console.log(err) : console.log("Successfully updated database!")
    );

}

// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;