var http = require('http');

/**
 * Grunt utility to fetch remote files.
 * @param {String} o.hostname Remote hostname.
 * @param {String} o.path Remote file path.
 * @param {String} o.dest Write destination.
 * @param {Function} done
 */
module.exports = function (grunt, o, done) {
    http.get({
        hostname: o.hostname,
        path: o.path
    }, function (res) {
        var file = '';
        if (res.statusCode === 200) {
            res.on('data', function (chunk) {
                file += chunk;
            });
            res.on('end', function () {
                grunt.file.write(o.dest, file);
                grunt.log.ok('Created ' + o.dest);
                done();
            });
        } else {
            grunt.log.error('(' + o.filename + ') Unexpected server response ' + res.statusCode + '!');
            done();
        }
    }).on('error', function (err) {
        grunt.log.error('(' + o.filename + ') ' + err);
        done();
    });
};
