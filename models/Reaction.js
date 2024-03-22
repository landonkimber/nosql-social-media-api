const mongoose = require('mongoose');


const reactionSchema  = new mongoose.Schema({
    reactionContent: {
        type: String,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Reaction = mongoose.model('reaction', reactionSchema);

module.exports = Reaction;