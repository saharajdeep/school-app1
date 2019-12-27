const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({

  file1:{
    type:String
  },
});


module.exports = mongoose.model('Image',gallerySchema);