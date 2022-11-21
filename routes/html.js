// SET CONSTANTS -----------------------------------------------------------------
const router = require("express").Router();
const path   = require("path");

// SET REQUESTS TO USE CORRECT PATH TO ROUTER ------------------------------------
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;