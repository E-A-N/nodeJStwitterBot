/**
* @param {object} Twitter - The current instance of the twitter api
* @param {string} message - A message that will be tweeted out
*/

exports = module.exports = function(Twitter, message){

    console.log('Tweeting out message');

    Twitter.post(
        'statuses/update',
        {status: message},
        function(err,data,res){
            console.log(data);
        }
    );
}
