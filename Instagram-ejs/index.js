const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");

app.get("/", (req,res) =>{
       res.render("home.ejs");
});

app.get("/ig/:username", (req,res) =>{
    let {username} = req.params;
    const instadata = require("./data.json");
    const data =instadata[username];
    if(data){
        res.render("insta.ejs",{data  });
    }
    else{
        res.render("error.ejs");
    }
  
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});