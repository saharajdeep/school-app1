const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const uploadFolder = './gallery/';
const fs = require('fs');
const router = express();
const Image=mongoose.model('Image');
var myUploads=[];

router.use(bodyParser.json());
router.use('/uploadFolder',express.static(__dirname + '/uploadFolder'));



fs.readdirSync(uploadFolder).map(file => {
   
  myUploads.push(file);

  });


router.get('/',(req,res)=>{
    Image.find((err,docs)=>{
        if(!err){
            res.render("userGallery/userImage",{
              viewTitle:"View Image",
              list:docs
            });
        }
        else{
            console.log('Error in retrieving employee list '+err);
        }
    });
  });
  
  
  module.exports=router;