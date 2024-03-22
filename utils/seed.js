const connection = require('../config/connection');
const { User, Post, Reaction } = require('../models');
const { getRandomUser} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Seeding . . . 🌱');
  await User.deleteMany();
  await Post.deleteMany();
  await Reaction.deleteMany();


  for (let i = 0; i < 5; i++) {

    const userData = getRandomUser();
    const user = new User({
      username: userData.username,
      email: userData.email,
      posts: []
    });
    await user.save();

    for (const post of userData.posts) {
      const newPost = new Post({
        userId: user._id,
        postSubject: post.postSubject,
        postContent: post.postContent,
        username: user.username,
        reactions: []
      });

      for (const reaction of post.reactions) {
        const newReaction = new Reaction({
          postId: newPost._id,
          reactionContent: reaction.reactionContent
        });

        await newReaction.save();
        newPost.reactions.push(newReaction);
      }

      await newPost.save();
      user.posts.push(newPost);
    }

    await user.save();
    console.log(`User #${i+1} seeded!`);
  }

  console.info('Seeding complete!🌳');
  process.exit(0);
});
