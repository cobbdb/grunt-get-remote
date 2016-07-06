module.exports = function (files) {
    var map = {};
    files.forEach(function (file) {
        var name = file.orig.dest,
            path = file.orig.src[0];
        // Remove the protocol.
        map[name] = path.replace(/^.*:\/\//, '');
    });
    return map;
};
