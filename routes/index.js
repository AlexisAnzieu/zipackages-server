var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var path = require('path');
var fs = require('fs-extra')
const { exec } = require('child_process');

var app = express()

/* GET home page. */
app.get('/', function (req, res, next) {
  res.send('wsh aloors')
});

app.post('/upload', upload.single('file'), function (req, res, next) {


  if (!req.file) {
    res.send("File was not found");
    return;
  }
  fs.renameSync(path.resolve(`uploads/${req.file.filename}`), path.resolve('uploads/package.json'))
  fs.mkdirSync(path.resolve(`uploads/${req.file.filename}`))
  fs.renameSync(path.resolve('uploads/package.json'), path.resolve(`uploads/${req.file.filename}/package.json`))

  return res.send(req.file.filename);

});

app.get('/download/:filename', function (req, res, next) {

  res.download(path.resolve(`uploads/${req.params.filename}/node_modules.zip`), 'node_modules.zip', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
    } else {
      fs.remove(path.resolve(`uploads/${req.params.filename}`), function () {
      });
    }
  });
});


module.exports = app;
