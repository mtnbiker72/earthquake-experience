const router = require('express').Router();
const userRoutes = require('./userRoutes');
const earthquakeRoutes = require('./earthquakeRoutes');

router.use('/users', userRoutes);
router.use('/earthquake', earthquakeRoutes);

module.exports = router;
