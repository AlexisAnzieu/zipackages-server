var socketio = require('socket.io')
var zipFolder = require('zip-folder');
const { exec } = require('child_process');
var path = require('path');

module.exports.listen = function (app) {
    io = socketio.listen(app)

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

        })


        socket.on('getSize', function (packagesJson) {

            var packages = JSON.parse(packagesJson);
            var totalSize = 0;
            var passed = 0;

            for (let item of packages) {
                exec(`bundle-phobia -s ${item.package}`, (error, stdout, stderr) => {
                    totalSize += Number(stdout);
                    passed++;
                    if (passed === packages.length) socket.emit("receiveSize", totalSize);

                })
            }

        })



    })

    return io
}