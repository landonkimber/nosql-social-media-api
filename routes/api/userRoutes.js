const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    viewUserFriends,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:id/friends').get(viewUserFriends);
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;