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
            id: uniqid(),
        };
        // ADD TO NOTE ARRAY FROM DB
        notes.push(newNote);

        // CALL FUNCTION TO WRITE TO FILE
        writeToFile("../db/db.json", JSON.stringify(notes));

    } else {

        console.log("title and text required to save note");

    };

});




// router.post("/", (req, res) => {
//     console.log("notes.js router.post ran");

//     // SET CONSTANTS
//     const { title, text } = req.body;
//     // SAVE NOTE IF THERE IS A TITLE AND A TEXT
//     if(title && text) {
//         const newNote = {
//             title,
//             text,
//             id: uniqid(),
//         };
//         // ADD TO NOTE ARRAY FROM DB
//         notes.push(newNote);
//         // CALL FUNCTION TO WRITE TO FILE
//         writeToFile("../db/db.json", JSON.stringify(notes));
//     } else {
//         console.log("title and text required to save note");
//     };
  
// });


// router.post("/notes", (req, res) => {

//     console.log("notes.js - save a NEW note function ran");

//     const { title, text } = req.body;

//     // IF THERE IS A NOTE TITLE AND TEXT
//     if(title && text) {

//       const newNote = {
//         title,
//         text,
//         id: uniqid()  //This is the random id # 
//       };

//       notes.push(newNote);

//     //   Write to file
//       fs.writeFile("../db/db.json", JSON.stringify(notes, null, 4), (err) =>
//         err
//      //   ? console.error(err)
//           : console.log("Success! Note has been saved. :)")
//       );
  
//       const response = {
//         status: "success",
//         body: newNote,
//       };
  
//       console.log(response);
//       res.status(201).json(response);

//     // ELSE REJECT IF TITLE AND/OR TEXT IS MISSING
//     } else {
//       res.status(500).json("Error! You need a note title and description to save.");
//     }
  
// });



// DELETE A NOTE -----------------------------------------------------------------





// router.delete("/:id", (req, res) => {
//     console.log("notes.js router.delete ran");

//     // ID TO DELETE
//     const idToDelete = req.params.id;
//     // CALL FUNCTION TO DELETE ID
//     deleteFromArray(idToDelete);
// });





// router.delete("/notes/:id", (req, res) => {

//     console.log("notes.js - delete a note function ran");

//     const id = req.params.id;

//     console.log(id);

//     // IF THERE'S AN ID
//     if(id) {

//       notes = notes.filter(note => note.id !== id);
        
//       fs.writeFile("../db/db.json", JSON.stringify(notes, null, 4), (err) =>
//         err
//         ? console.error(err)
//         : console.log("Success! Note was deleted. :)")
//       );
  
//       const response = {
//         status: "success",
//         id: id
//       };
  
//       res.status(201).json(response);
//     //   ELSE IF THERE'S NO ID
//     } else {
//         res.status(500).json("Error! There was an issue deleting this note. :(");
//     }

// });

// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;