//app.js
const express       =   require("express");
const app           =   express();   

const authRoutes    =   require("./routes/auth-routes");

//executing passport.use for strategies
const passportSetup =   require("./config/passport-setup");


//set up view engine
app.set("view engine", "ejs");

//set up routes
app.use("/auth",authRoutes);//domain/auth/authRoutes

//home route
app.get("/", (req,res)=>{
    res.render("home");
});

//start server command

const port = /*findPort()*/3000;
app.listen(port, ()=>{
    console.log(
        `app now listening for requests on port ${port}.`
    );
});//end app.listen()