const express = require('express');
const router = express.Router();
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
// const { check, validationResult } = require('express-validator');
var User=require('../models/user');

// router.use(expressValidator());
// Register
router.get('/register',function(req,res){
  res.render('register');
});

router.get('/login',function(req,res){
  res.render('login');
});

// Register User
router.post('/register',function(req,res){
  // var user=new User();
    var name=req.body.name;
    var email=req.body.email;
    var username=req.body.username;
    var password=req.body.password;
    var adminRole="false";

    var errors='';
      if (errors!=''){
        res.render('register',{
            errors:errors
        });
      }
      else{
   
         var newUser=new User({
           name:name,
           email:email,
           username:username,
           password:password,
           adminRole:adminRole
         });
    
        User.createUser(newUser,function(err,user){
           if(err) throw err;
           console.log(user);
         });

      req.flash('success_msg','You are registered and can now login')
          res.redirect('/users/login');
          }
      // else {
      //     if (err.name == 'ValidationError') {
      //         handleValidationError(err, req.body);
      //         res.render("player/addOrEdit", {
      //             viewTitle: "Insert Employee",
      //             player: req.body
      //         });
      //     }
          // else
          //     console.log('Error during record insertion : ' + err);
      // }
  });

// });

passport.use(new LocalStrategy(
    function(username,password,done){
      User.getUserByUsername(username,function(err,user){
       if(err) throw err;
       if(!user){
         return done(null,false,{message:'Incorrect username for member.'});
       }
        User.comparePassword(password,user.password,function(err,isMatch){
          if(err) throw err;
          if(isMatch){
            return done(null,user,{message:'You are now logged in'});
          }
          else{
            return done(null,false,{message:'Invalid password'});
          }
        });
      });
    }));

passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  User.getUserById(id,function(err,user){
    done(err,user);
  });
});

router.post('/login',
passport.authenticate('local',{successRedirect:'/user',failureRedirect:'/users/login',failureFlash:true}),
function(req,res){
  console.log('Inside Login');
  res.redirect('/');
});

router.get('/logout',function(req,res){
  req.logout();
  req.flash('success_msg','You are logged out');
  res.redirect('/users/login');
})


module.exports = router;