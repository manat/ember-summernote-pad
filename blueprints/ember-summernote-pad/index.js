/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'jquery',                 target: '~2.2.4' },
      { name: 'bootstrap',              target: '~3.3.6' },
      { name: 'font-awesome',           target: '~4.6.3' },
      { name: 'summernote',             target: '~0.8.1' }
    ]);
  }
};
