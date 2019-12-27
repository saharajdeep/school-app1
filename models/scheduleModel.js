const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({

  matchDay:{
    type:String
  },
  day:{
    type:String
  }
});

module.exports = mongoose.model('Schedule',scheduleSchema);