// import
let mongoose = require('mongoose');

// setup schema
let tweetSchema = mongoose.Schema

// Setup collection mapping
let tweetCollection = new tweetSchema({
    "username":String,
    "post":String,
    "likes":Number,
    "dislikes":Number,
    "image":String,
    "youtube":String
},{
    collection:"tweets"
})

// Export
module.exports = mongoose.model('tweetModel',tweetCollection);