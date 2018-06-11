//auth-routes.js

const router    = require("express").Router();
const passport  = require("passport");

//auth login
router.get("/login", (req,res)=>{
    //render login
    res.render("login");
});

//auth logout
router.get("/logout", (req,res)=>{
    //handle w/ passport
    res.send("loggin out");

});

//auth with Google
router.get("/google", passport.authenticate("google", {
    scope:["profile"]//other properties/information keys are available through api docs
}));

//callback route for google redirect
router.get("/google/redirect", (req,res)=>{
    res.send("You have reached the callback URI");
});


module.exports = router;




