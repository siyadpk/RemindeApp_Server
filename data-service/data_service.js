const db=require('./db')



  //register function

  const Register=(usname,email,passwd)=>{

  
    //asynchronous
    return db.User.findOne({email})
    .then(user=>{
      console.log(user);
      if(user){
        return {
          statuscode:401,
          status:false,
          message:'Existing user..!'
        }
      }
      else{
        const newUser=new db.User({
        
          usname,
          email,
          passwd,
          event:[]
        })
        newUser.save()
       
        return {
          statuscode:201,
          status:true,
          message:'successfully resgisteres...'

        }
      }

    })

      
     
   }

      //Login function
const login=(email,passwd)=>{
     
  return db.User.findOne({email,passwd})
    .then(user=>{
      if(user){
       currentuser=user.usname
       currentmail=user.email
       currentpwd=user.passwd
       
     
   
      
       return {
             statuscode:201,
             status:true,
             message:'successfully login...',
             currentuser,
             currentmail,
             currentpwd
             
           }
 
      }
      else{
       return {
         statuscode:401,
         status:false,
         message:'user doesnot exist..!'
             }
 
      }
    })
       
 }

 const addEvent=(email,pwd,date,task)=>{
   
  return db.User.findOne({email})
   .then(user=>{
     
     if(user){
       
      user.event.push({
        date:date,
        event:task

      })
      user.save()
      return{
        statuscode:201,
             status:true,
             message:'event successfully added..'
      }
      

     }
     
   })

 }

 //showevents
 const showEvent=(email)=>{
  return db.User.findOne({email})
  .then(user=>{
    if(user){
      return{
        statuscode:201,
          status:true,
        event:user.event
      } 
    }else{
      return{
        statuscode:401,
          status:false,
         message:"operation failed!!!"
      } 

    }
  })

 }

 //deleteraw
 const deleteRaw=(index,email)=>{
   console.log(index);
  return db.User.findOne({email})
   .then(user=>{
     if(user){
     user.event.splice(index,1)
     }
     user.save()
     return{
      statuscode:201,
           status:true,
           message:'event successfully deleted..'
    }
   })
  

 }

 //new edit updation
  const newEdit=(email,index,date,task)=>{

      return db.User.findOne({email})
       .then(user=>{
         if(user){
           console.log( user.event[index].date);
           console.log(date);
           user.event[index].date=date
           user.event[index].event=task
           
         }
         console.log( user.event[index].date);
         user.update()
         
         return{
          statuscode:201,
               status:true,
               message:'Edited successfully...'
        }
       })



 }


   module.exports={
       Register,
       login,
       addEvent,
       showEvent,
       deleteRaw,
       newEdit
   }