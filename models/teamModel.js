const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({

  teamName:{
    type:String
  },
});

module.exports = mongoose.model('Team',scheduleSchema);