const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const multer = require('multer');
 const New=mongoose.model('New');
const Standing=mongoose.model('Standing');
const Schedule=mongoose.model('Schedule');
const methodOverride = require('method-override');
const router = express();
const standingController=require("./standingController");

router.use(bodyParser.json());
router.use(methodOverride('_method'));

/** Storage Engine */

var storages=multer.diskStorage({
    destination:function(req,file,next){
        next(null,'uploads/');
    },
    filename:function(req,file,cb){
      const ext=file.mimetype.split('/')[1];
     cb(null,file.originalname);
    
  }
  });

     var upload=multer({storage:storages}); 


//   router.get('/',(req,res)=>{
 
//             res.render("admin/adminApprove",{
//               viewTitle:"See News",
              
//             });  
// });

// router.get('/',(req,res)=>{
 
//     res.render("standing/adminstanding",{
//       viewTitle:"Add standings",
      
//     });  
// });

router.get('/',(req,res)=>{

//   Schedule.find((err,docs)=>{
//     if(!err){
//         res.render("admin/adminApprove",{
//           viewTitle:"View Image",
//           matchList:docs
//         });
//     }
//     else{
//         console.log('Error in retrieving employee list '+err);
//     }
// }),
  Standing.find((err,docs)=>{
      if(!err){
          res.render("admin/adminApprove",{
            viewTitle:"View Image",
            stand:docs
          });
      }
      else{
          console.log('Error in retrieving employee list '+err);
      }
  });

});
router.post('/',upload.single('file'),function(req, res) {

  var news=new New();
  news.file=req.file.filename;
  news.date=req.body.date;
  news.description=req.body.description;
  news.save((err,doc)=>{
    if(!err)   res.render('admin/adminApprove',{
      news:req.body
   });
   else
   console.log('Error during inserting to database::',err);
  });
});



// router.get('/layouts',(req,res)=>{
//   Schedule.find((err,docs)=>{
//     if(!err){
//         res.render("admin/adminApprove",{
//           viewTitle:"View Image",
//           list:docs
//         });
//     }
//     else{
//         console.log('Error in retrieving employee list '+err);
//     }
// });
// });


module.exports=router;