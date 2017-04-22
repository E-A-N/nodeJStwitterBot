//import dependescies
var twit = require('twit');
var config = require('./config');
var path	= require('path');

//Pass configuration settings into twit api
const Twitter = new twit(config);

//Configure Routing
var rtRoute = path.join(__dirname,'botFunctions','retweet');
rtRoute = path.normalize(rtRoute);
var favRoute = path.join(__dirname,'botFunctions','favorteTweet');
favRoute = path.normalize(favRoute);

//Initiailize hashtages to query
const hashtags = '#depression, #depressed';

var retweet = require(rtRoute)(Twitter,hashtags);
var favoriteRandomTweet = require(favRoute,hashtags);


//Hellor World!
Twitter.post(
    'statuses/update',
    {status: "Herro Loves!"},
    function(err,data,res){
        console.log(data);
    }
);
