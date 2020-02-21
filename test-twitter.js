var Twitter = require('twitter');
 
var client = new Twitter( {
    consumer_key: 'tKcq2t9SYiWb6qbXypos6ZTEz'
  , consumer_secret: '8xmjqCHw02pbO8J3GGjPIKFSwXWe0EekO9up4U7DRnp5cn0Ebl'
  , access_token: '1136767728889552896-Sz6P5kD2uSugYZi0KdcWyzbATmLCrk'
  , access_token_secret: 'D2qhVxSXU6bLMDeE3F5CMK8G8QVZ7OocTUhCEObZL0M2m'
});
 
var params = {
    q: 'stopanimalselfies',
    count: 1
}
client.get('search/tweets', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  console.log(error)
});