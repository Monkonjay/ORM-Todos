const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// prepends '/api' to every route declared in apiRoutes
router.use('/api', apiRoutes);


module.exports = router;