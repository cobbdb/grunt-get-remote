var httpcopy = require('./util/httpcopy.js'),
    buildMap = require('./util/build-file-map.js');

/**
 * Installs remote dependencies as listed in `package.json`.
 */
module.exports = function (grunt) {
    grunt.registerMultiTask('get-remote', function () {
        var file, path, pivot,
            remotes = buildMap(this.files),
            options = this.options(),
            root = options.root || 'remote_components',
            done = this.async(),
            remaining = Object.keys(remotes).length;

        grunt.log.subhead('Installing ' + remaining + ' remote files...');
        for (file in remotes) {
            path = remotes[file];
            pivot = path.indexOf('/');
            httpcopy(grunt, {
                filename: file,
                dest: root + '/' + file,
                hostname: path.substr(0, pivot),
                path: path.substr(pivot)
            }, function () {
                remaining -= 1;
                if (remaining === 0) {
                    done();
                }
            });
        }
    });
};
