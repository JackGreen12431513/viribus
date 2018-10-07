const jimp = require('jimp')

bot.fetchUser('').then(myUser => {
    console.log(myUser.avatarURL); // My user's avatar is here!
});