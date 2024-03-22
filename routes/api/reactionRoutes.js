const router = require('express').Router();
const {
    getAllReactions,
    getSingleReaction,
    createReaction,
    deleteReaction, 
} = require('../../controllers/reactionController');

router.route('/').get(getAllReactions).post(createReaction);
router.route('/:id').get(getSingleReaction).delete(deleteReaction);

module.exports = router;