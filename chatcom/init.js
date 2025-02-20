const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main().then((res)=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatme');
}
let allchats=[{
    from:"neha",
    to:"chandu",
    message:"send me your notes",
    created_at:new Date(),
},{
    from:"ashwin",
    to:"ananya",
    message:"call me tommorow",
    created_at:new Date(),
},{
    from:"nitish",
    to:"manjesh",
    message:"wake me up tommorow",
    created_at:new Date(),
},{
    from:"shashank",
    to:"nischay",
    message:"send my money back",
    created_at:new Date(),
},{
    from:"tony",
    to:"harry",
    message:"teach me java",
    created_at:new Date(),
},{
    from:"brook",
    to:"gayle",
    message:"join the match asap!!",
    created_at:new Date(),
}
]

Chat.insertMany(allchats);
