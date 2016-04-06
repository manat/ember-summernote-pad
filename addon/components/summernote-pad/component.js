import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  didInitAttrs: function() {
    Ember.assert("summernote has to exist on Ember.$.fn.summernote", typeof Ember.$.fn.summernote === "function" );
  },

  didInsertElement: function() {
    this.$('#summernote').summernote({
      height: 300, // set editor height
      minHeight: null, // set minimum height of editor
      maxHeight: null, // set maximum height of editor
      focus: true // set focus to editable area after initializing summernote
    });
  }
});
