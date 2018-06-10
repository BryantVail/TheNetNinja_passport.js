//auth-routes.js

const router = require("express").Router();

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
router.get("/google", (req,res)=>{
    //handle w/passport to give user sign-on interface
    res.send("logging in w/google");

});

module.exports = router;




