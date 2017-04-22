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
