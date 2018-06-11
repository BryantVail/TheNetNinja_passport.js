//passport-setup.js

const passport      = require("passport");
const GoogleStrategy= require("passport-google-oauth20");
const keys          = require("./keys");


passport.use(
    new GoogleStrategy({//using the google api to sign in. 
        // options for the strategy
        callbackURL :   "/auth/google/redirect",
        //above file path is from the root, since the file will be run from app.js(main file)
        
        clientID    :   keys.google.clientID,
        clientSecret:   keys.google.clientSecret
        
    }, ()=> {
        //passport callback function

    })
);