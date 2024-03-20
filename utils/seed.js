const connection = require('../config/connection');
const { User, Post, Reaction } = require('../models');
const { getRandomUser , getRandomPost, getRandomReaction} = require('./data');
const mongoose = require('mongoose');

connection.on('error', (err) => err);

async function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array);
  }
}

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany();
  await Post.deleteMany();
  await Reaction.deleteMany();


  const userData = getRandomUser();

  const user = new User({
    username: userData.username,
    posts: []
  });
  await user.save();

  await forEach(userData.posts, async (post) => {
    const newPost = new Post({
      userId: user._id,
      postSubject: post.postSubject,
      postContent: post.postContent,
      username: user.username,
      reactions: [],
    });

      await forEach(post.reactions, async (reaction) => {
        const newReaction = new Reaction({
          postId: newPost._id,
          reactionContent: reaction.reactionContent,
        });

        await newReaction.save();
        newPost.reactions.push(newReaction);
        await newPost.save();
      });
    
    
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
  });

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
