//import dependescies
var twit = require('twit');
var config = require('./config');

//Pass configuration settings into twit api
var Twitter = new twit(config);
/*
var rtRoute = path.join(__dirname,'botFunctions','retweet');
rtRoute = path.normalize(rtRoute);
var retweet = require(rtRoute)(Twitter);
*/

var retweet = function(){

    var params = {};
    //use query strings to search hashtags
    params.q = '#depression, #depressed';
    params.result_type = 'recent';
    params.lang = 'en';

    Twitter.get('serach/tweets',params, function(err,data){
        //check for errors
        if(err) {
            console.log("An error has occurred during search...");
        }
        else {
            var retweetID = data.statuses[0].id_str;

            //retweet search result via http post method
            Twitter.post('statuses/retweet/:id',{id: retweetID},
                function(err,res){
                    if(res){
                        console.log('Retweeted!');
                    }
                    if(err){
                        console.log('An eroor occured while retweeting!');
                    }
                }
            ); //end Twitter.post
        }
    });
}

retweet();

//retweet in every 50 minutes
//setInterval(retweet,30000000);


/*  FAVORITE BOT */
/*
// find a random tweet and 'favorite' it
var favoriteTweet = function(){
  var params = {
      q: '#nodejs, #Nodejs',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet, 3600000);

// function to generate a random tweet tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};
*/
