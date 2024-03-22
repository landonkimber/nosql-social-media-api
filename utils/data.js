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
const postContentArr = [
  'I havent seen this ever!!',
  'I am so happy I could die!',
  'I am so sad that this happened!',
  'Mucho gusto mr Mayor!',
  'This is the worst thing ever!',
  'OMG I NEVER KNEW THIS!',
  'You guys wouldn\'t believe what happened to me today!',
  'This is the best thing ever!',
  'There has never been a better time to be alive',
  'i dont even know what to say :/',
  'Feliz navidad! my big break came today!',
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
      postContent: getRandomArrItem(postContentArr),
      reactions: getRandomReaction()
    });
  }
  return posts;
};

const getRandomUser = () => {
  let users = {
      username: getRandomArrItem(namesArr),
      email: `${getRandomArrItem(namesArr)}@email.com`,
      posts: getRandomPost()
  };

  return users ;
}
//DISPLAY STUFF
// console.log('data.js getRandomUsers')
module.exports = { getRandomUser};