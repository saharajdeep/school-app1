const express = require('express');
const router = express.Router();
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
var Admin=require('../models/admin');

// router.use(expressValidator());
// Register
router.get('/adminRegister',function(req,res){
  res.render('adminRegister');
});

router.get('/adminLogin',function(req,res){
  res.render('adminLogin');
});

// Register User
router.post('/adminRegister',function(req,res){
  // var user=new User();
    var name=req.body.name;
    var email=req.body.email;
    var username=req.body.username;
    var password=req.body.password;
    var adminRole="true";

    var errors='';
      if (errors!=''){
        res.render('adminRegister',{
            errors:errors
        });
      }
      else{
   
         var newUser=new Admin({
           name:name,
           email:email,
           username:username,
           password:password,
           adminRole:adminRole
         });
    
         Admin.createAdmin(newUser,function(err,user){
           if(err) throw err;
           console.log(user);
         });

      req.flash('success_msg','You are registered and can now login')
          res.redirect('/admin/adminLogin');
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
      Admin.getAdminByUsername(username,function(err,admin){
       if(err) throw err;
       if(!admin){
         return done(null,false,{message:'Incorrect username.'});
       }
        Admin.comparePassword(password,admin.password,function(err,isMatch){
          if(err) throw err;
          if(isMatch){
            return done(null,admin,{message:'You are now logged in'});
          }
          else{
            return done(null,false,{message:'Invalid password'});
          }
        });
        // Admin.getAdminByAdminRole(adminRole,admin.adminRole,function(err,admin){
        //   if(err) throw err;
        //   if(!admin){
        //     return done(null,admin,{message:'You are now logged in'});
        //   }
        //   else{
        //     return done(null,false,{message:'Invalid role'});
        //   }
        // });
      });
    }));

passport.serializeUser(function(admin,done){
  done(null,admin.id);
});

passport.deserializeUser(function(id,done){
  Admin.getAdminById(id,function(err,admin){
    done(err,admin);
  });
});

router.post('/adminLogin',
passport.authenticate('local',{successRedirect:'/admin',failureRedirect:'/admin/adminLogin',failureFlash:true}),
function(req,res){
  res.redirect('/');
});

router.get('/logout',function(req,res){
  req.logout();
  req.flash('success_msg','You are logged out');
  res.redirect('/admin/adminLogin');
})


module.exports = router;