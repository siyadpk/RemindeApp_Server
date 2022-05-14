//import mongoose

const mongoose=require("mongoose")

//connection

mongoose.connect("mongodb://localhost:27017/reminderApp_server",{
    useNewUrlParser:true
})

//create model

const User=mongoose.model("User",{
    
    
    usname:String,
    email:String,
    passwd:String,
    
    event:[]

})

//export
module.exports={
    User
}