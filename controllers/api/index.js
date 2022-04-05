const router = require('express').Router();
const userRoutes = require('./userRoutes');
const earthquakeRoutes = require('./earthquakeRoutes');
const experienceRoutes = require('./experienceRoutes');

router.use('/users', userRoutes);
router.use('/earthquake', earthquakeRoutes);
router.use('/experience', experienceRoutes);

module.exports = router;
