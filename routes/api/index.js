const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// router.use('/reactions', reactionRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
