// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
    'clientID'    : process.env.FB_APP_ID, // your App ID
    'clientSecret'  : process.env.FB_APP_SECRET, // your App Secret
    'callbackURL'   : 'http://localhost:8888/auth/facebook/callback'
  },

  'twitterAuth' : {
    'consumerKey'     : 'your-consumer-key-here',
    'consumerSecret'  : 'your-client-secret-here',
    'callbackURL'     : 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth' : {
    'clientID'    : 'your-secret-clientID-here',
    'clientSecret'  : 'your-client-secret-here',
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  }

};