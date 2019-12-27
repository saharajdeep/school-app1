const mongoose=require('mongoose');

var standingSchema=new mongoose.Schema({
     

          champion:{
                   type:String
                 },
          second:{
                   type:String
                 },
                 third:{
                           type:String
                       },
            highestScore:{
              type:String
            },
          
          bestPlayer:{
              type:String
          },
          bestGoalkeeper:{
            type:String
        }
     
});



module.exports=mongoose.model('Standing',standingSchema);