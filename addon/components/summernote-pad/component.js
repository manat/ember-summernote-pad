import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  didInitAttrs: function() {
    Ember.assert("summernote has to exist on Ember.$.fn.summernote", typeof Ember.$.fn.summernote === "function" );
  },

  didInsertElement: function() {
    this.$('#summernote').summernote();
  }
});
