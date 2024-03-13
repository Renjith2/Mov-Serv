const express = require('express')
const app =express()
var cors=require('cors')
const path = require("path");
__dirname = path.resolve();


app.use(cors())
const useRoute=require('./routes/userRoute')
app.use(express.json())
app.use('/api/user',useRoute)
 
require('dotenv').config()
const dbConfig=require('./config/dbConfig') 

const movieROute=require('./routes/movieRoute')
app.use('/api/movie' , movieROute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }

 
const theatreRoute = require('./routes/theatreRoute')
app.use('/api/theatres' , theatreRoute)


const bookingroute = require('./routes/bookingRoute')
app.use("/api/bookings", bookingroute);

const upcomingRoute = require('./routes/upcomingRoute')
app.use("/api/upcoming", upcomingRoute);

app.get('/',(req,res)=>{
    res.send("Hi thee!!!")
})
 
app.listen(1244,(req,res)=>{
    console.log("Sever is Running")    
})