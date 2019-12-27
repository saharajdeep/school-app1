const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Player = mongoose.model('Player');

router.get('/',(req,res)=>{
    Player.find((err,docs)=>{
        if(!err){
            res.render("allTeam/teamList",{
            viewTitle:"Approve",
            list:docs
            });
        }
        else{
            console.log('Error in retrieving employee list '+err);
        }
    });
  });
  
  
  module.exports=router;