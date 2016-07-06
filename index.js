/* jshint node: true */
'use strict';

function mergeProp(target, source) {
  for( var key in source ) { target[key] = source[key]; }
}

module.exports = {
  name: 'ember-summernote-pad',

  included: function(app) {
    this._super.included(app);

    // default options for ember-summernote-pad
    var options = {
      importBootstrap: true,
      importFontAwesome: true,
      plugins: [],
      langs: []
    };

    // replace default options with options from the hosted app
    mergeProp(options, app.options['ember-summernote-pad']);

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

    app.import( app.bowerDirectory + '/summernote/dist/summernote.css');
    app.import( app.bowerDirectory + '/summernote/dist/summernote.min.js');
    app.import( app.bowerDirectory + '/summernote/dist/font/summernote.woff', {
      destDir: 'assets/font'
    });

    // import summernote langs
    // must be before plugins, since plugins might extend $.summernote.lang
    for( var i in options.langs ) {
      app.import( app.bowerDirectory + '/summernote/lang/summernote-' + options.langs[i] + ".js");
    }

    // import summernote ext plugins
    for( var i in options.plugins ) {
      app.import(options.plugins[i]);
    }

  }
};
