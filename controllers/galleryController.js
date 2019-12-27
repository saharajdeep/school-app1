const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const Image = mongoose.model('Image');
const methodOverride = require('method-override');
const router = express();

router.use(bodyParser.json());
router.use(methodOverride('_method'));
// const uploadFolders = './gallery/';
// const fs = require('fs');
// const myImg=[];
router.use(bodyParser.json());

/** Storage Engine */

var storages = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, 'gallery/');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, file.originalname);

  }
});

var addImg = multer({ storage: storages });




// fs.readdirSync(uploadFolders).map(file1 => {
//   console.log("Image Names:: "+file1+";");
//   // return path.join(uploadFolder, file)

//   myImg.push(file1);

//   });
//   console.log('For images:: ',myImg);

//   router.use('/uploadFolders',express.static(__dirname + '/uploadFolders'));


router.get('/', (req, res) => {

  res.render("adminGallery/adminImage", {
    viewTitle: "Add Images",

  });
});



//   router.get('/',(req,res)=>{
//     Image.find((err,docs)=>{
//         if(!err){
//             res.render("userGallery/userImage",{
//               viewTitle:"See News",
//               list:docs,
//             });
//         }
//         else{
//             console.log('Error in retrieving employee list '+err);
//         }
//     });

// });

router.post('/', addImg.single('file1'), function (req, res) {

  var image = new Image();
  image.file1 = req.file.filename;
  image.save((err, doc) => {
    if (!err) res.render('admin/adminApprove', {
      image: req.body,
    });
    else
      console.log('Error during inserting to database::', err);
  });
});





module.exports = router;
