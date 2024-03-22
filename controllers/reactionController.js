const {Reaction} = require('../models');

module.exports = {
    async getAllReactions(req, res) {
        try {
            const reactionData = await Reaction.find();
            res.json(reactionData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleReaction(req, res) {
        try {
            const reactionData = await Reaction.findById(req.params.id);
            res.json(reactionData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }, 
    async createReaction(req, res) {
        try {
            const reactionData = await Reaction.create(req.body);
            res.json(reactionData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const reactionData = await Reaction.findByIdAndDelete(req.params.id);
            res.json(reactionData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}