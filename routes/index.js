const router = require('express').Router();


// Setup routes constants
const noteRoutes = require('./notes');
const htmlRoutes = require('./html');

// Match requests with correct routes
router.use('/', htmlRoutes);
router.use('/api/notes', noteRoutes);

module.exports = router;