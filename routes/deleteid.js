const writeToFile = require("./writefile");

// const notes = require("../db/db.json");

var notes = [{"title":"Test Title1","text":"Test text1","id":"1"},{"title":"Test Title2","text":"Test text2","id":"2"},{"title":"Test Title3","text":"Test text3","id":"3"},{"title":"Test Title4","text":"Test text4","id":"4"}];

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