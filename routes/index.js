const router = require('express').Router();


// Setup routes constants
const noteRoutes = require('./notes');
const htmlRoutes = require('./html');

// Match requests with correct routes
router.use('/api/notes', noteRoutes);
router.use('/', htmlRoutes);


module.exports = router;