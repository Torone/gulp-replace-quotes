
/*
 * gulp-replace-quotes
 *
 * Copyright (c) 2017 Andrea Turri (Torone)
 * Licensed under the MIT license.
 * https://github.com/Torone/gulp-replace-quotes/blob/master/LICENSE-MIT
 */

'use strict';

// dependencies

var through2 = require('through2');
var gutil = require('gulp-util');

// constants

var PLUGIN_NAME = 'gulp-to-single-quote';

// plugin

module.exports = function(opts) {

  var quote = (opts) ? opts.quote || 'single' : 'single';

  return through2.obj(function(file, enc, cb) {

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME,
        'Streaming not supported'));
      return cb();
    }

    var contents = file.contents.toString();

    var result = contents.substring(1, contents.length - 1);
    if (quote === 'single' || quote !== 'double') {
      result = result.replace(/"/g, '\'');
    }
    if (quote === 'double') {
      result = result.replace(/'/g, '\"');
    }

    file.contents = new Buffer(result);

    this.push(file);
    cb();

  });

};
