exports = module.exports = function(Twitter, hashtags){

    console.log("Herro Robo! <3");
    var params = {};
    //use query strings to search hashtags
    params.q = hashtags;
    params.result_type = 'recent';
    params.lang = 'en';

    Twitter.get('search/tweets',params, function(err,data){
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
                        console.log('An error occured while retweeting!');
                    }
                }
            ); //end Twitter.post
        }
    });
}
