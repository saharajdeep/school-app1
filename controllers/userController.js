const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Schedule=mongoose.model('Schedule');
const Standing=mongoose.model('Standing');

// router.get('/',(req,res)=>{
//     res.render('user/index',{
//         viewTitle:"User Dashboard"
//     });
// });



router.get('/',(req,res)=>{
//     Schedule.find((err,docs)=>{
//       if(!err){
//           res.render("user/index",{
//             list:docs
//           });
//       }
//       else{
//           console.log('Error in retrieving employee list '+err);
//       }
//   });

Standing.find((err,docs)=>{
    if(!err){
        res.render("user/index",{
          viewTitle:"User Dashboard",
          stand:docs
        });
    }
    else{
        console.log('Error in retrieving employee list '+err);
    }
});

});

    module.exports=router;