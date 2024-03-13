const mongoose= require('mongoose')

mongoose.connect(process.env.mongodb_url)

const connection= mongoose.connection

connection.on('connected',(req,res)=>{
    console.log("Success")
})