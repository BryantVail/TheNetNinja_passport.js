//passport-setup.js

const passport      = require("passport");
const GoogleStrategy= require("passport-google-oauth20");
const keys          = require("./keys");
const User          = require("../models/userModel");

passport.serializeUser((user, done)=>{
    done(null/*error*/,user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, user);
    })
    
});

passport.use(
    new GoogleStrategy({//using the google api to sign in. 
        // options for the strategy
        callbackURL :   "/auth/google/redirect",
        //above file path is from the root, since the file will be run from app.js(main file)
        
        clientID    :   keys.google.clientID,
        clientSecret:   keys.google.clientSecret
        
    }, (accessToken, refreshToken, profile, done)=> {
        /*from google verified access*/
        /*refresh access token*/
        /*payload, in this case, the "profile" */
        //function "done"
        console.log(profile);
        User.findOne({googleId:profile.id})
            .then((currentUser)=>{
                if(currentUser){
                    //user exists
                    done(null/*forError*/, currentUser);

                    console.log(`User is: ${currentUser}`);
                }else{
                    new User({
                        username    : profile.displayName,
                        googleId    : profile.id,
                        thumbnail   : profile._json.image.url
                    }).save().then((newUser)=>{
                        done(null/*error*/, newUser);
                        console.log(
                            `New User Created: ${newUser}`
                        );
                    });
                }
            });
        //passport callback function
        //console.log(profile);//we will take for now, Id, & displayName
        // console.log(
        //     "passport.use(\"new googleStrategy\" callback method console"
        // );
    })
);//end passport.use(

