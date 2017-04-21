exports = module.exports = function(Twitter){

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
}
