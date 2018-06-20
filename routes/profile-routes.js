//profile-routes.js

const router    = require("express").Router();

//middleware
const authCheck = (req,res, next)=>{
    if(!req.user){
        //
        res.redirect("/auth/login");
    }else{
        next();
    }
};

router.get("/",authCheck, (req,res)=>{
    res.send("You are logged in, this is your profile: " + req.user.username);
});

module.exports = router;

















