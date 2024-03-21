const { Post } = require('../models');

module.exports = {
    async getAllPosts(req, res) {
        try {
            const postData = await Post.find();
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSinglePost(req, res) {
        try {
            const postData = await Post.findById(req.params.id);
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateSinglePost(req, res) {
        try {
            const postData = await Post.findByIdAndUpdate(req.params.id, req.body);  
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createPost(req, res) {
        try {
            const postData = await Post.create(req.body);
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deletePost(req, res) {
        try {
            const postData = await Post.findByIdAndDelete(req.params.id);
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};