// ROUTES ------------------------------------------------------------------------
// REQUIRE EXPRESS.JS
const express = require("express");

const { middleman } = require('./middleman/middleman');
const routes        = require('./routes/');
const app           = express();
const PORT          = process.env.PORT || 3001;

// CREATE PATH FOR ROUTER FILES
// const router_Notes = require("./routes/notes");
// const router_Html  = require("./routes/html");

// MIDDLEWARE --------------------------------------------------------------------
// for parsing application/json and urlencoded data
app.use(middleman); //middleman function literally just to console log what's happening behind the scenes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES ------------------------------------------------------------------------
// Public folder made available
app.use(express.static("public"));
// Notes and Html routes
app.use("/", routes);

// CONSOLE LOG WHEN SERVER IS RUNNING --------------------------------------------
app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);
