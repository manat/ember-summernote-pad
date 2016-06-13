/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-summernote-pad',

  included: function(app) {
    this._super.included(app);

    var options = app.options['ember-summernote-pad'] || { 
      importJQuery: true,
      importBootstrap: true,
      importFontAwesome: true,
      plugins: []
    };

    // Includes Bootstrap
    if( options.importBootstrap ) {
      app.import( app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css' );
      app.import( app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map' );
      app.import( app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js' ); 
    }

    if( options.importFontAwesome ) {
      app.import( app.bowerDirectory + '/font-awesome/css/font-awesome.min.css');
      app.import( app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts' });
      app.import( app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts' });
      app.import( app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts' });
    }

    app.import('bower_components/summernote/dist/summernote.css');
    app.import('bower_components/summernote/dist/summernote.min.js');
    app.import(app.bowerDirectory + '/summernote/dist/font/summernote.woff', {
      destDir: 'assets/font'
    });

    if( options.plugins.length > 0 ) {
      for( var i in options.plugins ) {
        app.import(options.plugins[i]);
      }

    }
  }
};
