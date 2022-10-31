// SET CONSTANTS -----------------------------------------------------------------
const router       = require("express").Router();
const router_Notes = require("./notes");
const router_Html  = require("./html");

// SET REQUESTS TO USE CORRECT PATH TO ROUTER ------------------------------------
router.use("/api/notes", router_Notes);
router.use("/", router_Html);

// EXPORT ROUTER ---------------------------------------------------------------
module.exports = router;