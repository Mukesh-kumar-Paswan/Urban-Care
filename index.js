const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public/")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.listen(port , ()=> {
    console.log("Serve is listening at port" , port);
})

// Login Page

app.get("/" , (req , res) => {
    res.render("LoginPage.ejs");
});

// Login Page

// Home Page

app.get("/home" , (req , res) => {
    res.render("HomePage.ejs");
} )

// Home Page
