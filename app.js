//app.js
const express       =   require("express");
const app           =   express();   
//auth routes
const authRoutes    =   require("./routes/auth-routes");
const profileRoutes =   require("./routes/profile-routes");
//executing passport.use for strategies
const passportSetup =   require("./config/passport-setup");
const passport      =   require("passport");
//mongoose
const mongoose      =   require("mongoose");
const keys         =    require("./config/keys");

const cookieSession =   require("cookie-session");


//set up view engine
app.set("view engine", "ejs");

app.use(cookieSession({
    maxAge  : 24*60*60*1000, //day
    keys    : [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongoDB
mongoose.connect(keys.mlab.dbURI, ()=>{
    console.log("Mongo Connected");
});

//ROUTES
//Authorization Routes
app.use("/auth",authRoutes);//domain/auth/authRoutes

//Profile Routes
app.use("/profile", profileRoutes);

//home route
app.get("/", (req,res)=>{
    res.render("home", {user:req.user});
});

//SERVER
//start server command//
const port = /*findPort()*/2000;
app.listen(port, ()=>{
    console.log(
        `app now listening for requests on port ${port}.`
    );
});//end app.listen()