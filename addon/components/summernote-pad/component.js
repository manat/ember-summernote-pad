import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  // summernote initialization options
  height: null,
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
  airMode: false,
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
  fontNames: [],
  fontNamesIgnoreCheck: [],
  dialogsInBody: true,
  dialogsFade: true,
  disableDragAndDrop: false,
  shortcuts: false,
  content: "",
  extOptions: {},

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
      airMode: this.get('airMode'),
      popover: this.get('popover'),
      placeholder: this.get('content'),
      callbacks: {}
    };

    // Summernote callbacks - http://summernote.org/deep-dive/#callbacks
    var callbacks = ['onInit', 'onEnter', 'onEnter', 'onFocus', 'onBlur', 'onKeyup', 'onKeydown', 'onPaste', 'onImageUpload', 'onChange'];
    for( let cb of callbacks ) {
      if( !Ember.isEmpty(this.get(cb)) ) {
        options.callbacks[cb] = this.get(cb);
      }
    }

    var pluginOptions = this.get('extOptions');
    for( let key in pluginOptions ) {
      options[key] = pluginOptions[key];
    }

    this.$('#summernote').summernote(options);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('#summernote').summernote('destroy');
  },

  keyUp: function() {
    this.updateContent();
  },

  updateContent() {
    var content = this.$('#summernote').summernote('code');
    this.set('content', content);
  }

});
