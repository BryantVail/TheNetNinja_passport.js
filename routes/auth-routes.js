//auth-routes.js

const router    = require("express").Router();
const passport  = require("passport");

//auth login
router.get("/login", function (req,res) {
    //render login
    res.render("login", {user:req.user});
});
//auth login
// router.get("/login", (req,res)=>{
//     //render login
//     res.render("login", {user:req.user});
// });

//auth logout
router.get("/logout", (req,res)=>{
    //handle w/ passport
    // res.send("loggin out");
    req.logout();
    res.redirect("/");

});

//auth with Google
router.get("/google", passport.authenticate("google", {
    scope:["profile"]//other properties/information keys are available through api docs
}));

//callback route for google redirect
router.get("/google/redirect", passport.authenticate("google"), (req,res)=>{
    //req.user represents the user info now that the cookie has been set
    //res.send(req.user);
    res.redirect("/profile");

});


module.exports = router;




