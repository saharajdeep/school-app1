const mongoose= require('mongoose');
mongoose.set('useFindAndModify', false);
// mongoose.Promise = global.Promise;
// Create mongo connection
mongoose.connect("mongodb://localhost:27017/playerDB",{useNewUrlParser: true}, (err) =>{
     if(!err){console.log('MongoDB Connection Succeeded.')}
     else {console.log('Error in DB connection '+err)}
});

require('./admin');
require('./regModels');
require('./newsModel');
require('./galleryModel');
require('./scheduleModel');
require('./standingsModel');
require('./teamModel');