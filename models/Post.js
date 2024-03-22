const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postSubject: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true,
        length: { min: 1, max: 280 },
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    username: {
        type: String,
    },
    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;