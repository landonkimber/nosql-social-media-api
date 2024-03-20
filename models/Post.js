const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postSubject: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        required: true
    },
    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;