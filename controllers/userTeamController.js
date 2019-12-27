const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Player = mongoose.model('Player');
const multer=require('multer');
const bodyparser = require('body-parser');


router.get('/',(req,res)=>{
    Player.find((err,docs)=>{
        if(!err){
            res.render("userTeams/teamUser",{
              viewTitle:"View Teams",
            list:docs
            });
        }
        else{
            console.log('Error in retrieving employee list '+err);
        }
    });
  });
  
  
  module.exports=router;