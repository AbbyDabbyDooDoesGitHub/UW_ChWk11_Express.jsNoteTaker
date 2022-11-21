// SET CONSTANTS -----------------------------------------------------------------
const router = require("express").Router();
const uniqid = require("uniqid");
const fs     = require("fs");

// ATTATCH USER NOTES VAR TO THE DB
const notes = require("../db/db.json");

// GET REQUEST FOR DB ------------------------------------------------------------
router.get("/notes", (req, res) => {
    console.log("notes.js checked db request");

    return res.json(notes);
});

// SAVE A NEW NOTE ---------------------------------------------------------------
router.post("/", (req, res) => {

    console.log("notes.js - save a NEW note function ran");

    const { title, text } = req.body;

    // IF THERE IS A NOTE TITLE AND TEXT
    if(title && text) {

      const newNote = {
        title,
        text,
        id: uniqid()  //This is the random id # 
      };

      notes.push(newNote);

    //   Write to file
      fs.writeFile("../db/db.json", JSON.stringify(notes, null, 4), (err) =>
        err
          ? console.error(err)
          : console.log("Success! Note has been saved. :)")
      );
  
      const response = {
        status: "success",
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);

    // ELSE REJECT IF TITLE AND/OR TEXT IS MISSING
    } else {
      res.status(500).json("Error! You need a note title and description to save.");
    }
  
});



// DELETE A NOTE -----------------------------------------------------------------
router.delete("/:id", (req, res) => {

    console.log("notes.js - delete a note function ran");

    const id = req.params.id;

    // IF THERE'S AN ID
    if(id) {

      notes = notes.filter(note => note.id !== id);
        
      fs.writeFile("../db/db.json", JSON.stringify(notes, null, 4), (err) =>
        err
        ? console.error(err)
        : console.log("Success! Note was deleted. :)")
      );
  
      const response = {
        status: "success",
        id: id
      };
  
      res.status(201).json(response);
    //   ELSE IF THERE'S NO ID
    } else {
        res.status(500).json("Error! There was an issue deleting this note. :(");
    }

});

// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;