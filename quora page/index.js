const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));



let posts =[{
    id: uuidv4(),
    username: "Chethan",
    content : "i love coding"
},
{
    id:uuidv4(),
    username : "Ram",
    content : "Hard work is important to achive success"
},
{
    id:uuidv4(),
    username : "Krish",
    content : "i got selected for my first internship"
}];

app.get("/posts", (req,res)=> {       
    res.render("index.ejs", {posts});
});

app.get("/posts/new",(req,res) =>{    // function is for taking a new data from user
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {    //this function is to post the details in the website
    let {username,content} = req.body;
   let id = uuidv4();
    posts.push({id ,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
   

});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
   res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id/", (req,res) =>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () =>{
    console.log("listening to port")
}
);
