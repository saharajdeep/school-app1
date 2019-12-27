const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Player = mongoose.model('Player');
const Admin = mongoose.model('Admin');
const multer=require('multer');
const bodyparser = require('body-parser');


router.get('/:teamName',(req,res)=>{
    Player.find({teamName:req.params.teamName},(err,docs)=>{
        if(!err){
            var teamList=[];
            var yearList=[];
            var telephone=[];
            var firstList=[];
            var lastList=[];
            var fList=[];   
            var sList=[];         
            var id=[];
            var proof=[];
            for(var c=0;c<docs.length;c++){
                teamList.push(docs[c].teamName);
            }
            for(var i=0;i<docs.length;i++){
                yearList.push(docs[i].year);
            }
       
            for(var i=0;i<docs.length;i++){
                telephone.push(docs[i].phoneNo);
            }
            for(var i=0;i<docs.length;i++){
                firstList.push(docs[i].firstName);
                for(var j=0;j<firstList[i].length;j++){
                    var fNames = firstList[i];
                    fList.push(fNames[j]);
                }
            }
            for(var k=0;k<docs.length;k++){
                lastList.push(docs[k].lastName);
                for(var l=0;l<lastList[k].length;l++){
                    var sNames = lastList[k];
                    sList.push(sNames[l]);
                }
            }
            for(var m=0;m<docs.length;m++){
                id.push(docs[m].pic);
                for(var n=0;n<id[m].length;n++){
                    var pNames = id[m];
                    proof.push(pNames[n]);
                }
            }
       
            res.render("playerApprove/approve",{
              viewTitle:"Approve",
              teamName:teamList,
              year:yearList,
              phoneNo:telephone,
              firstName:fList,
              lastName:sList,
              pic:proof
            });
        }
        else{       
            console.log('Error in retrieving player list '+err);
        }
    });
  });
 
  router.get('/',(req,res)=>{
    Admin.find((err,docs)=>{
        if(!err){
            console.log(req.body);
            res.render("playerApprove/approve",{
                viewTitle:"Approve",
                list:docs
              });
          }
          else{       
              console.log('Error in retrieving player list '+err);
          }
      });
    });

  module.exports=router;