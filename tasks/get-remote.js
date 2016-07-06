var httpcopy = require('./util/httpcopy.js');

/**
 * Installs remote dependencies as listed in `package.json`.
 * Remote dependencies must be installed manually and their paths
 * must not begin with protocol (http/https).
 *
 * Files are installed into the `remote_components` directory.
 *
 * Example) "gpt.js": "www.googletagservices.com/tag/js/gpt.js"
 */
module.exports = function (grunt) {
    grunt.registerTask('httpcopy', function () {
        var file, path, pivot,
            remotes = this.files,
            done = this.async(),
            remaining = Object.keys(remotes).length;

        console.log('\t>>> files is', JSON.stringify(remotes, null, 3));
        grunt.log.subhead('Installing ' + remaining + ' remote files...');
        /*for (file in remotes) {
            path = remotes[file];
            pivot = path.indexOf('/');
            httpcopy(grunt, {
                filename: file,
                dest: 'remote_components/' + file,
                hostname: path.substr(0, pivot),
                path: path.substr(pivot)
            }, function () {
                remaining -= 1;
                if (remaining === 0) {
                    done();
                }
            });
        }*/
    });
};
