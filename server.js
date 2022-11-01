// ROUTES ------------------------------------------------------------------------
// REQUIRE EXPRESS.JS
const express = require("express");
// USE EXPRESS WHEN APP VARIABLE IS CALLED
const app = express();
// CREATE PATH FOR ROUTER FILES
const router_Notes = require("./routes/notes");
const router_Html  = require("./routes/html");

// SET LOCAL PORT LOCATION
const PORT = process.env.PORT || 3001;

// MIDDLEWARE --------------------------------------------------------------------
// for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES ------------------------------------------------------------------------
// Public folder made available
app.use(express.static("public"));
// Notes and Html routes
app.use("/api", router_Notes);
app.use("/", router_Html);

// CONSOLE LOG WHEN SERVER IS RUNNING --------------------------------------------
app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);




const writeToFile = require("./routes/writefile");
const deleteFromArray = require("./routes/deleteid");

// var testdb = `[
//     {
//         "title":"Test Title1",
//         "text":"Test text1", 
//         "id":"1"
//     },
//     {
//         "title":"Test Title2",
//         "text":"Test text2",
//         "id":"2"
//     },
//     {
//         "title":"Test Title3",
//         "text":"Test text3",
//         "id":"3"
//     },
//     {
//         "title":"Test Title4",
//         "text":"Test text4",
//         "id":"4"
//     }
// ]`;

// writeToFile("./db/db.json", testdb);

var idToDelete = "3";
deleteFromArray(idToDelete);
