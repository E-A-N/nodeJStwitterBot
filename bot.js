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
    params.q = '#nodejs, #Nodejs';
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
