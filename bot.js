//import dependescies
const twit = require('twit');
const config = require('./config');
const path	= require('path');

//Pass configuration settings into twit api
const Twitter = new twit(config);

//Configure Routing
var rtRoute = path.join(__dirname,'botFunctions','retweet');
rtRoute = path.normalize(rtRoute);
var favRoute = path.join(__dirname,'botFunctions','favoriteTweet');
favRoute = path.normalize(favRoute);
var tweetRoute = path.join(__dirname,'botFunctions','tweetMessage');
tweetRoute = path.normalize(tweetRoute);


//Initiailize hashtages to query
const hashtags = '#depression, #depressed';

//Pass message to tweet out
const tweetMessage = "Hey look at me, I'm an automated tweet!";

//Carry out bot actions
const retweet             = require(rtRoute)(Twitter,hashtags);
//const favoriteRandomTweet = require(favRoute)(Twitter,hashtags);
const sendTweet           = require(tweetRoute)(Twitter,tweetMessage);
