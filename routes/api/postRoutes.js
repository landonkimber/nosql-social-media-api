const router = require('express').Router();

const {
    getAllPosts,
    getSinglePost,
    createPost,
    deletePost,
    updateSinglePost
} = require('../../controllers/postController');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getSinglePost).put(updateSinglePost).delete(deletePost);

module.exports = router;