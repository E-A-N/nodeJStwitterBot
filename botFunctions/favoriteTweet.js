exports = module.exports = function(Twitter, hashtags){

    console.log("Favorite World! <3");

    var params = {};
    params.q = hashtags;
    params.result_type = 'recent';
    params.lang = 'en';

    // Search for random tweet
    Twitter.get('search/tweets', params, function(err,data){

        // find tweets
        var tweet = data.statuses;
        var randomTweet = ranDom(tweet);   // pick a random tweet

        // if random tweet exists
        if(typeof randomTweet !== 'undefined'){
            // Tell TWITTER to 'favorite'
            Twitter.post('favorites/create',
            {id: randomTweet.id_str},
            function(err, response){
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

    // function to generate a random tweet tweet
    function ranDom (arr) {
        var index = Math.floor(Math.random()*arr.length);
        return arr[index];
    };
}
