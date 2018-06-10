//passport-setup.js

const passport      = require("passport");
const GoogleStrategy= require("passport-google-oauth20");

passport.use(
    new GoogleStrategy({
        // options for the strategy
        
}), ()=> {
    //passport callback function
});