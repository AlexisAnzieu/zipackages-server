require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var app = __webpack_require__(4);
var debug = __webpack_require__(11)('server:server');
var http = __webpack_require__(12);

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3030');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

//SOCKET.IO

var io = __webpack_require__(13).listen(server)



/**
 * Listen on provided port, on all network interfaces.
 */



server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var createError = __webpack_require__(5);
var express = __webpack_require__(1);
var path = __webpack_require__(0);
var cookieParser = __webpack_require__(6);
var logger = __webpack_require__(7);

var indexRouter = __webpack_require__(8);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(1);
var multer = __webpack_require__(9);
var upload = multer({ dest: 'uploads/' });
var path = __webpack_require__(0);
var fs = __webpack_require__(10);
const { exec } = __webpack_require__(2);

var app = express();

/* GET home page. */
app.get('/', function (req, res, next) {
  res.send('wsh aloors');
});

app.post('/upload', upload.single('file'), function (req, res, next) {

  if (!req.file) {
    res.send("File was not found");
    return;
  }
  fs.renameSync(path.resolve(`uploads/${req.file.filename}`), path.resolve('uploads/package.json'));
  fs.mkdirSync(path.resolve(`uploads/${req.file.filename}`));
  fs.renameSync(path.resolve('uploads/package.json'), path.resolve(`uploads/${req.file.filename}/package.json`));

  return res.send(req.file.filename);
});

app.get('/download/:filename', function (req, res, next) {

  res.download(path.resolve(`uploads/${req.params.filename}/node_modules.zip`), 'node_modules.zip', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
    } else {
      fs.remove(path.resolve(`uploads/${req.params.filename}`), function () {});
    }
  });
});

module.exports = app;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var socketio = __webpack_require__(14);
var zipFolder = __webpack_require__(15);
const { exec } = __webpack_require__(2);
var path = __webpack_require__(0);

module.exports.listen = function (app) {
    io = socketio.listen(app);

    io.on('connection', function (socket) {

        socket.on('createPackage', function (filename) {

            exec('npm install', { cwd: path.resolve(`uploads/${filename}`) }, (error, stdout, stderr) => {

                if (error) {
                    socket.emit("generated", error);
                }

                socket.emit("generated", 0);

                zipFolder(path.resolve(`uploads/${filename}/node_modules`), path.resolve(`uploads/${filename}/node_modules.zip`), function (err) {
                    if (err) {
                        socket.emit("zipped", -1);
                        return;
                    } else {
                        socket.emit("zipped", filename);
                        return;
                    }
                });
            });
        });

        socket.on('getSize', function (packagesJson) {

            var packages = JSON.parse(packagesJson);
            var totalSize = 0;
            var passed = 0;

            for (let item of packages) {
                exec(`bundle-phobia -s ${item.package}`, (error, stdout, stderr) => {
                    totalSize += Number(stdout);
                    passed++;
                    if (passed === packages.length) socket.emit("receiveSize", totalSize);
                });
            }
        });
    });

    return io;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("zip-folder");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map