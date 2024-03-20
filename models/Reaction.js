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
});

const Reaction = mongoose.model('reaction', reactionSchema);

module.exports = Reaction;