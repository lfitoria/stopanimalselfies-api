console.log('starting bot')

var Twit = require('twit')

var config = require('./config1')

var T = new Twit(config)

var params = {
    q: 'stopanimalselfies',
    count: 1
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
    var tweets = data.statuses;
    console.log(tweets)
    for (let index = 0; index < tweets.length; index++) {
        // const element = array[index];
        console.log(tweets[index].user.name)
        console.log(tweets[index].user.screen_name)
        console.log(tweets[index].user.location)
        console.log('---------')
        
    }
    return tweets;
    // console.log(typeof(data))
}