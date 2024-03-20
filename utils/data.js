const namesArr = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const postSubjectsArr = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

const reactionsArr = [
  ':)',
  ':(',
  'X)',
  ';)',
  '8)',
  ':D',
  ':3',
  '<3',
  'X',
  '!!',
  '??',
];


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomReaction = () => {
  const reactions = [];

  for(i=0;i<Math.floor(Math.random() * 7);i++){
    reactions.push({
      reactionContent: getRandomArrItem(reactionsArr)
    });
  }
  return reactions;
};

const getRandomPost = () => {
  const posts = [];

  for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
    posts.push({
      postSubject: getRandomArrItem(postSubjectsArr),
      postContent: 'You will never guess what crazy thing just happened to me!! OMG! It was so wild!',
      reactions: getRandomReaction()
    });
  }
  return posts;
};

const getRandomUser = () => {
  let users = {
      username: getRandomArrItem(namesArr),
      posts: getRandomPost()
  };

  return users ;
}
//DISPLAY STUFF
// console.log('data.js getRandomUsers')
console.log(getRandomUser());
module.exports = { getRandomUser , getRandomPost, getRandomReaction};