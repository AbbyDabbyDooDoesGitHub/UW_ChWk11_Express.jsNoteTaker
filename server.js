// ROUTES ------------------------------------------------------------------------
// REQUIRE EXPRESS.JS
const express = require("express");

const { middleman } = require('./middleman/middleman');
// const routes        = require('./routes/index');
const app           = express();
const PORT          = process.env.PORT || 3001;

// CREATE PATH FOR ROUTER FILES
const noteRoutes = require("./routes/notes");
const htmlRoutes = require("./routes/html");

// MIDDLEWARE --------------------------------------------------------------------
// for parsing application/json and urlencoded data
app.use(middleman); //middleman function literally just to console log what's happening behind the scenes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ROUTES ------------------------------------------------------------------------
// Public folder made available
app.use(express.static("public"));
// Notes and Html routes
// app.use("/", routes);

// Match requests with correct routes
app.use('/api', noteRoutes);
app.use('/', htmlRoutes);

// CONSOLE LOG WHEN SERVER IS RUNNING --------------------------------------------
app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);
