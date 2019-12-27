const mongoose=require('mongoose');


var employeeSchema=new mongoose.Schema({
     
          teamName:{
                   type:String
                 },
          year:{
                   type:String
                 },
                 phoneNo:{
                           type:String
                       }, 
             
          firstName:{
              type:[String]
          },
          lastName:{
            type:[String]
        },
          pic:{
            type:[String]
          }
});


module.exports =mongoose.model('Player',employeeSchema);