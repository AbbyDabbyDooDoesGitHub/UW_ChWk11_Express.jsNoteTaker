const writeToFile = require("./writefile");

const notes = require("../db/db.json");

// DELETE BY ID ------------------------------------------------------------------
function deleteFromArray(idToDelete) {

    // console.log("idToDelete is "+ idToDelete);
    console.log("deleteFromArray ran");

    // LOCATE ID
    var noteWithId = notes.findIndex((obj) => obj.id === idToDelete);
    // console.log("noteWithId is "+ noteWithId);

    // SPLICE NEW ARRAY
    notes.splice(noteWithId, 1);
    console.log("notes is "+ JSON.stringify(notes));

    // CALL FUNCTION TO OVERWRITE FILE
    writeToFile("./db/db.json", JSON.stringify(notes));

}

// EXPORT WRITEFILE --------------------------------------------------------------
module.exports = deleteFromArray;