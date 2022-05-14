
//server creation

const express=require('express')
const dataservices=require('./data-service/data_service')

//create app
 const app=express()

 //set port num
 app.listen(3001,()=>{
     console.log("server started");
 })


 //convert json to normal
app.use(express.json())

//cors
const cors=require("cors")
app.use(cors({
    origin:'http://localhost:4200'
}))



app.post('/register',(req,res)=>{

    dataservices.Register(req.body.uname,req.body.email,req.body.pwd)
   .then(result=>{
    res.status(result.statuscode).json(result)

   })
     

})


//bank-server login
  
app.post('/login',(req,res)=>{

    dataservices.login(req.body.email,req.body.pwd)
    .then(result=>{
       res.status(result.statuscode).json(result) 
    })
    

})


app.post('/addevent',(req,res)=>{
    console.log(req.body.currentmail);

    dataservices.addEvent(req.body.currentmail,req.body.currentpwd,req.body.date,req.body.task)
    
    .then(result=>{
       res.status(result.statuscode).json(result) 
    })
    

})


//show events

app.post('/showevent',(req,res)=>{
    dataservices.showEvent(req.body.email)
    
    .then(result=>{
       res.status(result.statuscode).json(result) 
    })

})

//delete raw

app.post('/deleteraw',(req,res)=>{
    dataservices.deleteRaw(req.body.index,req.body.email)
    .then(result=>{
        res.status(result.statuscode).json(result) 
     })
})


//newedit value updation

app.post('/neweditvalue',(req,res)=>{
    dataservices.newEdit(req.body.email,req.body.index,req.body.date,req.body.task)
    .then(result=>{
        res.status(result.statuscode).json(result) 
     })
})