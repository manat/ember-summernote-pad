import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  // summernote initialization options
  height: 150,
  minHeight: null,
  maxHeight: null,
  focus: true,
  lang: 'en-US',
  /**
   * [groupName, [list of button]]
   * ['insert', ['picture', 'link', 'video', 'table', 'hr']],
   * ['style', ['fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'clear', 'strikethrough', 'superscript', 'subscript']]
   * ['paragraph', ['style', 'ol', 'ul', 'paragraph', 'height']]
   * ['misc', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]
    */
  toolbar: [
    ['style', ['style']],
    ['style', ['bold', 'underline', 'clear']],
    ['fontsize', ['fontsize']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'video']],
    ['misc', ['codeview', 'help']]
  ],
  airmode: false,
  popover: {
    image: [
      ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
      ['float', ['floatLeft', 'floatRight', 'floatNone']],
      ['remove', ['removeMedia']]
    ],
    link: [
      ['link', ['linkDialogShow', 'unlink']]
    ],
    air: [
      ['color', ['color']],
      ['font', ['bold', 'underline', 'clear']],
      ['para', ['ul', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture']]
    ]
  },
  // placeholder: '',
  fontNames: [],
  fontNamesIgnoreCheck: [],
  dialogsInBody: true,
  dialogsFade: true,
  disableDragAndDrop: false,
  shortcuts: false,

  // options for external plugins
  map: {
    // apiKey: ''

  },

  didInitAttrs() {
    Ember.assert("summernote has to exist on Ember.$.fn.summernote", typeof Ember.$.fn.summernote === "function" );
  },

  didInsertElement() {
    var options = {
      height: this.get('height'),
      minHeight: this.get('minHeight'),
      maxHeight: this.get('maxHeight'),
      focus: this.get('focus'),
      lang: this.get('lang'),
      toolbar: this.get('toolbar'),
      popover: this.get('popover'),
      map: this.get('map'),

      callbacks: {
        onInit: function() {
          console.log('Summernote is launched');
        }
      }
    };

    this.$('#summernote').summernote(options);
  },

  actions: {

  }
});
