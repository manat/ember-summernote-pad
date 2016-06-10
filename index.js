/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-summernote-pad',

  included: function(app) {

    var options = app.options.summernote;
    // lang + plugin


    // Includes Bootstrap
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css.map',{
      destDir: 'assets'
    });
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

    // Includes Summernote
    app.import('bower_components/summernote/dist/summernote.css');
    app.import('bower_components/summernote/dist/summernote.min.js');

  }
};
