const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Player=mongoose.model('Player');
const multer=require('multer');
const path=require('path');

// const Team=mongoose.model('Team');

router.use(express.static(__dirname+'./assets/'));

var storage=multer.diskStorage({
    destination:function(req,file,next){
        next(null,'./assets/uploads/');
    },
    filename:function(req,file,cb){
     cb(null,file.originalname);
    
}
});

var upload=multer({
    storage:storage
}).fields([
    {name:'pic'},
    {name:'certificate'}
]);

router.get('/',(req,res)=>{
    res.render('player/addOrEdit',{
        viewTitle:"Insert Player"
    });

});

router.post('/',function(req,res,next){
    upload(req,res,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log(req.files);
        }
    });
});