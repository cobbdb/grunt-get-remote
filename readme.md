# grunt-get-remote

[![License](https://img.shields.io/npm/l/grunt-get-remote.svg)](http://npmjs.com/package/grunt-get-remote)
[![NPM version](https://badge.fury.io/js/grunt-get-remote.svg)](http://badge.fury.io/js/grunt-get-remote)
[![Dependencies](https://img.shields.io/david/cobbdb/grunt-get-remote.svg)](./package.json)
[![Peer Dependencies](https://img.shields.io/david/peer/cobbdb/grunt-get-remote.svg)](./package.json)

Fetch remote assets for your build tasks.

    $ npm i grunt-get-remote --save-dev

-------------
Get-remote is allows you to prefetch your remote assets to roll them into
your own site bundle. Task will work for any type of asset - images, scripts,
css files, etc. This is a great way to bypass slow 3rd party cdn's.

## Task Configuration
Just pass in a filename and its corresponding url.

    'get-remote': {
        libraries: {
            files: {
                'gpt.js': 'www.googletagservices.com/tag/js/gpt.js',
                'jquery.js': 'https://code.jquery.com/jquery-2.2.4.min.js'
            }
        }
    }

#### options.root
Optional. Define a custom install directory. The default location is
`remote_components`.

    'get-remote': {
        options: {
            root: 'optional/root-directory'
        }
    }

The task can be loaded like any other grunt contrib:

    grunt.loadNpmTasks('grunt-get-remote');

---------
* See: https://www.npmjs.org/package/grunt-get-remote
* See: http://github.com/cobbdb/grunt-get-remote
* License: MIT
