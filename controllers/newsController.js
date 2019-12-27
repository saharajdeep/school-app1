const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const uploadFolders = './uploads/';
const fs = require('fs');
const router = express();
const New=mongoose.model('New');
var myUploads=[];

fs.readdirSync(uploadFolders).map(file => {

  // return path.join(uploadFolder, file)
  
  myUploads.push(file);

  });






router.use(bodyParser.json());
router.use('/uploadFolders',express.static(__dirname + '/uploadFolders'));



router.get('/',(req,res)=>{
  New.find((err,docs)=>{
      if(!err){
          res.render("userNews/viewNews",{
            viewTitle:"See News",
            list:docs
          });
      }
      else{
          console.log('Error in retrieving employee list '+err);
      }
  });
});


module.exports=router;
module.exports.myUploads=myUploads;
