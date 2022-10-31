// REQUIRE EXPRESS.JS
const express = require("express");
// USE EXPRESS WHEN APP VARIABLE IS CALLED
const app = express();
// CREATE PATH FOR ROUTER FILES
const routes = require("./routes");
const writeToFile = require("./routes/writefile");
const deleteFromArray = require("./routes/deleteid");
// SET LOCAL PORT LOCATION
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder made available so individual routes don't have to be created for every resource.
app.use(express.static('public'));
// For any routes check the router index file
app.use('/', routes);

// Server set to listen to designated port and console log that it's live on that port
app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);






// var testdb = [
//     {
//         "title":"Test Title1",
//         "text":"Test text1", 
//         "id":"1",
//     },
//     {
//         "title":"Test Title2",
//         "text":"Test text2",
//         "id":"2",
//     },
//     {
//         "title":"Test Title3",
//         "text":"Test text3",
//         "id":"3",
//     },
//     {
//         "title":"Test Title4",
//         "text":"Test text4",
//         "id":"4",
//     },
// ];

// writeToFile("./db/db.json", JSON.stringify(testdb));

// var idToDelete = "3";
// deleteFromArray(idToDelete);
