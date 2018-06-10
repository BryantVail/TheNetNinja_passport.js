//passport-setup.js

const passport      = require("passport");
const GoogleStrategy= require("passport-google-oauth20");

passport.use(
    new GoogleStrategy({//using the google api to sign in. 
        // options for the strategy
        clientID    :"708740628285-rf4vefeupm01jqgseesafj23gab1vdtr.apps.googleusercontent.com",
        clientSecret:"591V6vssm-UXGOY07l9VYPn8",
        
}), ()=> {
    //passport callback function
});