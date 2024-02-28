let express = require('express');
let mongoose = require('mongoose');
let tweet = require('./model/tweets')
// create express app
let app = express()

// configure express app to encode/decode json
app.use(express.json());

dbstring = "mongodb+srv://muhamadfaiz:rozalley@cluster0.chi7kzt.mongodb.net/tweet";
mongoose.connect(dbstring);
let db = mongoose.connection

// check db connection
db.on("open",()=>{
    console.log("MongoDB connected");
})

// create 1st API
app.get("/",(request,response)=>{
    console.log("API / called with GET");
    response.send("Welcome to Express");
})

// create post API
app.post("/",(request,response)=>{
    console.log("API / called with Post");
    response.send("Welcome to Express");
})


// API to get all from mongoDB
app.get("/1.0/tweet/all",(request,response)=>{
    console.log("API /tweet/all called with GET");
    // use model to all tweets
    tweet.find({})
    .then((data)=>{
        console.log("Query success for tweet/all");
        response.json(data);
    })
    .catch((error)=>{
        console.log("Query error for tweet/all");
        response.json(error)
    })
})

// API to add document to mongoDB
app.post("/1.0/tweet/add",(request,response)=>{
    console.log("API /tweet/add called with POST");
    // Extract request body from incoming request
    let rBody = request.body;
    console.log(rBody);
    // create a blank instance of tweet model
    let newTweet = new tweet({
        username:rBody.username,
        post:rBody.post,
        likes:rBody.likes,
        dislikes:rBody.dislikes,
        image:rBody.image,
        youtube:rBody.youtube
    })
    // use model to insert data
    newTweet.save()
    .then((data)=>{
        console.log("Query success for tweet/add");
        response.json(data);
    })
    .catch((error)=>{
        console.log("Query error for tweet/add");
        response.json(error)
    })
})


// Update document value
app.put("/1.0/tweet/update/:id",(request,response)=>{
    console.log("API /tweet/add called with POST");
    let id = request.params.id
    console.log(id)
    // Extract request body from incoming request
    // Extract request body from incoming request
    let rBody = request.body;
    console.log(rBody);
    // create a blank instance of tweet model
    // let newTweet = new tweet({
    //     username:rBody.username,
    //     post:rBody.post,
    //     likes:rBody.likes,
    //     dislikes:rBody.dislikes,
    //     image:rBody.image,
    //     youtube:rBody.youtube
    // })
    tweet.updateOne({_id:id}, {$set:rBody})
    .then((data)=>{
        console.log("Query success for tweet/update/:id");
        console.log(data);
        response.send(data)
    })
    .catch((error)=>{
        console.log("Query error for tweet/update/:id");
        response.json(error)
    })
})


let PORT = 1234
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})