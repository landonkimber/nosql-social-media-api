const {User} = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const userData = await User.find();
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const userData = await User.findById(req.params.id);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.id, req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const userData = await User.findByIdAndDelete(req.params.id);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendId } });
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async removeFriend(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } });
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}