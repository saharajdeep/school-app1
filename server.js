require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bcrypt = require('bcrypt-pbkdf');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const userController = require('./controllers/userController')
const teamController = require('./controllers/teamController');
const playerController = require('./controllers/playerController');
const adminController = require('./controllers/adminController');
const newsController = require('./controllers/newsController');
const galleryController = require('./controllers/galleryController');
const scheduleController = require('./controllers/scheduleController');
const userImgController = require('./controllers/userImgController');
const mainController = require('./controllers/mainController');
const standingController = require('./controllers/standingController');
const approveController = require('./controllers/approveController');
const userTeamController = require('./controllers/userTeamController');



var app = express();




// Middleware
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/gallery'));
app.use(express.static(__dirname + '/playerUploads'));
app.use(logger('dev'));
app.use(flash());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));





app.use(express.static('./views/layouts'));
app.use(express.static('./views/partials'));
var routes = require('./controllers/index');
var users = require('./controllers/users');
var admin = require('./controllers/admin');
// app.use('/',indexController);
app.use('/user', userController);
app.use('/admin', admin);
app.use('/player', playerController);
app.use('/allTeam', teamController);
app.use('/admin', adminController);
app.use('/userNews', newsController);
app.use('/adminGallery', galleryController);
app.use('/userGallery', userImgController);
app.use('/layouts', mainController);
app.use('/standing', standingController);
app.use('/schedule', scheduleController);
app.use('/playerApprove', approveController);
app.use('/userTeams', userTeamController);

//make way for some custom css, js and images
app.use('/customCss', express.static(__dirname + '/assets/customCss'));
app.use('/customJs', express.static(__dirname + '/assets/customJs'));
app.use('/lib', express.static(__dirname + '/assets/lib'));
app.use('/pic', express.static(__dirname + '/assets/pic'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/gallery', express.static(__dirname + '/gallery'));
app.use('/playerUploads', express.static(__dirname + '/playerUploads'));




app.set('views', path.join(__dirname, '/views/'));
app.engine('html', exphbs({ extname: 'html', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', 'html');


// Express body parser
app.use(cookieParser());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));



// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use('/', routes);
app.use('/users', users);


app.listen(3680, () => {
  console.log('Express server started at port :3680');
});


module.exports = app;