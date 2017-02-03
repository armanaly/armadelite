var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Service MongoDb
// var mongoose = require('mongoose');
//Service image in cloud
var cloudinary = require('cloudinary');



var appRoutes = require('./routes/app');
// var marqueRoutes = require('./routes/marques');
// var vehiculeRoutes = require('./routes/vehicules');
// var loadPhotoRoutes = require('./routes/load_image');
// var demandRoutes = require('./routes/demand');
// var stepRoutes = require('./routes/steps');

var app = express();
var multer = require('multer');

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
/** Serving from the same express Server
 No cors required */
app.use(express.static('../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


cloudinary.config({
    cloud_name: 'htamml3fv',
    api_key: '479571498319886',
    api_secret: 'wBUZ-eReQJpK_mninA2SMIP7WzI'
});

/*var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
});
var upload = multer({ //multer settings
  storage: storage
}).single('file');
/!** API path that will upload the files *!/
app.post('/upload', function(req, res) {
  upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }
    res.json({error_code:0,err_desc:null});
  })
});
app.listen('3000', function(){
  console.log('running on 3000...');
});*/


// mongoose.connect('localhost:27017/auto');
//mongoose.connect('marxan:Axonian456@ds063715.mlab.com:63715/heroku_1ngv0fsg');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
  next();
});

// app.use('/marque', marqueRoutes);
// app.use('/vehicule', vehiculeRoutes);
// app.use('/load_image', loadPhotoRoutes);
// app.use('/demand', demandRoutes);
// app.use('/step', stepRoutes);
app.use('/',appRoutes);

// Object to send emails


//
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname + '-' + Date.now())
//   }
// })
//
// var upload = multer({ storage: storage })
//var tmpStorage = Object.keys();
// destFolder = './uploads/vehicule2';
// var storage = multer.diskStorage({
//
//
//     destination: function (req, file, cb) {
//
//       cb(null, destFolder)
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// })
//
// var upload = multer({ storage: storage });
//
// app.post('/upload', upload.any(), function(req, res) {
//  //   res.send(req.files);
//   res.send(res);
// })

// app.post("/upload", multer({dest: "./uploads/"},{filename: function (req, file, cb) {
//   cb(null, file.originalname + '-' + Date.now())
// }}).array("uploads[]", 12), function(req, res) {
//   res.send(req.files);
// });

// var server = app.listen(3000, function() {
//   console.log("Listening on port %s...", server.address().port);
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
