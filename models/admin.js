const mongoose = require('mongoose');
var bcrypt=require('bcryptjs');
const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  username: {
    type: String,

  },
  email: {
    type: String,
   
  },
  password: {
    type: String,
  
  },
  adminRole: {
    type: String,
  
  }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;

module.exports.createAdmin=function(newUser,callback){
  bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash(newUser.password,salt,function(err,hash){
          newUser.password=hash;
          newUser.save(callback);  
    });
  });
}

module.exports.getAdminByUsername=function(username,callback){
  var query={username:username};
  Admin.findOne(query,callback);
} 

module.exports.getAdminById=function(id,callback){
    Admin.findById(id,callback);
} 

module.exports.comparePassword=function(candidatePassword,hash,callback){
   bcrypt.compare(candidatePassword,hash,function(err,isMatch){
         if(err) throw err;
         callback(null,isMatch);
   });
}

module.exports.getAdminByAdminRole=function(adminRole,callback){
  var role={adminRole:adminRole};
  Admin.findOne(role,callback);
}