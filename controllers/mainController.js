const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const multer = require('multer');
const Standing=mongoose.model('Standing');
const Schedule=mongoose.model('Schedule');
const methodOverride = require('method-override');
const router = express();

router.use(bodyParser.json());
router.use(methodOverride('_method'));





router.get('/',(req,res)=>{
//   Schedule.find((err,docs)=>{
//     if(!err){
//         res.render("layouts/mainLayout",{
//           viewTitle:"View Image",
//           list:docs
//         });
//     }
//     else{
//         console.log('Error in retrieving employee list '+err);
//     }
// }),
Standing.find((err,docs)=>{
        if(!err){
            res.render("layouts/mainLayout",{
              viewTitle:"View Image",
              stand:docs
            });
        }
        else{
            console.log('Error in retrieving employee list '+err);
        }
    });

});

module.exports=router;