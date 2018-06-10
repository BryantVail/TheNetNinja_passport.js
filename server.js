//server.js

const express   =   require("express");
const app       =   express();   

//set up view engine
app.set("view engine", "ejs");

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