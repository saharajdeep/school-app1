const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({

  file:{
    type:String
  },
  date:{
    type:String
  },
  description: {
    type: String
  },
});


module.exports = mongoose.model('New', newsSchema);