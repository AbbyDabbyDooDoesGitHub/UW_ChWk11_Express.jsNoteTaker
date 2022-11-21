// SET CONSTANTS -----------------------------------------------------------------
const router = require("express").Router();
const uniqid = require("uniqid");
const fs     = require("fs");

const deleteFromArray = require("./deleteid");
const writeToFile     = require("./writefile");

// ATTATCH USER NOTES VAR TO THE DB
const notes = require("../db/db.json");


// GET REQUEST FOR DB ------------------------------------------------------------
router.get("/notes", (req, res) => {
    console.log("notes.js checked db request");

    return res.json(notes);
});

// SAVE A NEW NOTE ---------------------------------------------------------------
router.post("/notes", (req, res) => {
    console.log("notes.js router.post ran");
    // SET CONSTANTS
    const { title, text } = req.body;
    // SAVE NOTE IF THERE IS A TITLE AND A TEXT
    if(title && text) {
        const newNote = {
            title,
            text,
            id: notes[notes.length-1].id +1,
        };
        // ADD TO NOTE ARRAY FROM DB
        notes.push(newNote);

        // CALL FUNCTION TO WRITE TO FILE
        writeToFile("../db/db.json", JSON.stringify(notes));

    } else {

        console.log("title and text required to save note");

    };

});



// DELETE A NOTE -----------------------------------------------------------------
router.delete("/notes/:id", (req, res) => {

    console.log("notes.js router.delete ran");

    // ID TO DELETE
    const idToDelete = req.params.id;
    // CALL FUNCTION TO DELETE ID
    deleteFromArray(idToDelete);
});



// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;