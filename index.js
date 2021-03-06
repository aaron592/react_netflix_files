const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const userRouter = require('./controllers/user.js');
const videoRouter = require('./controllers/video.js');
const res = require('express/lib/response');

mongoose.connect("mongodb+srv://admin-aaron:Aaronmongodb22@cluster0.fwqni.mongodb.net/video_stream")
.then(()=>{console.log("Connection Successfull")})
.catch(()=>{
    console.log("Connection failed");
         
})

const app =express();

app.use(express.json());
app.use(cors());

app.use("/user",userRouter);
app.use("/videos",videoRouter);

let port = process.env.PORT;

if(port == null || port == ""){
  port = 3000;
}

app.listen(port,function(){
  console.log("Server started successfully");
})
