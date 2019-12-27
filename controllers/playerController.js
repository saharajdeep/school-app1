const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const multer = require('multer');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const formFields = require('../assets/customJs/formFields');
var multiparty = require('multiparty');
const path = require('path');
// var upload=require("express-fileupload");


router.use(express.static(__dirname + './assets/'));
router.use(bodyParser.json());
router.use(methodOverride('_method'));

/** Storage Engine */

var Storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, 'playerUploads/');
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        cb(null, file.originalname);

    }
});

var playerFile = multer({ storage: Storage });
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req, res) => {
    res.render('player/addOrEdit', {
        viewTitle: "Insert Player"
    });

});


// Form submission
router.post('/',(req, res) => {
    //  if(req.method== 'POST')
    //  insertRecord(req,res);   
    //  else
    //  updateRecord(req,res);
    console.log('Player list ::' + req.body);

    var player = new Player();

    player.teamName = req.body.teamName;
    player.year = req.body.year;
    player.phoneNo = req.body.phoneNo;
    player.firstName = req.body.firstName;
    player.lastName = req.body.lastName;
    player.pic = req.body.pic;
    player.save((err, doc) => {
        if (!err) res.render('player/addOrEdit', {
            player: req.body
        });
        else
            console.log('Error during inserting to database::', err);
    });

});


function updateRecord(req, res) {
    Player.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('player/list'); }
        // else {
        //     if (err.name == 'ValidationError') {
        //         handleValidationError(err, req.body);
        //         res.render("employee/addOrEdit", {
        //             viewTitle: 'Update Employee',
        //             player: req.body
        //         });
        //     }
        else
            console.log('Error during record update : ' + err);
        // }
    });
}

router.get('/list', (req, res) => {
    Player.find((err, docs) => {
        if (!err) {
            res.render("player/list", {
                viewTitle: "Approve",
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list ' + err);
        }
    });
});



// function handleValidationError(err,body){
//     for(field in err.errors){
//         switch(err.errors[field].path){
//             case 'adharCard':
//                 body['adharCardError']=err.errors[field].message;
//               break;
//              default:
//                  break;  
//         }
//     }
//  }


router.get('/:id', (req, res) => {
    Player.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("player/addOrEdit", {
                viewTitle: "Update",
                player: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Player.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/player/list');
        }
        else {
            console.log('Error in Player delete : ' + err);
        }
    });
});

module.exports = router;

