import Ember from 'ember';
import layout from './template';

const EVENTS = ['onInit', 'onEnter', 'onFocus', 'onBlur', 'onKeyup', 'onKeydown', 'onPaste', 'onImageUpload'];

export default Ember.Component.extend({
  layout: layout,

  // summernote options
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
    ['text-style', ['bold', 'underline', 'clear']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'video']]
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
  placeholder: "Hello, Summernote",
  extOptions: {},

  callbacks: Ember.computed( function() {
    let callbacks = {
      onChange: this.contentDidUpdate.bind(this)
    };

    // Summernote callbacks - http://summernote.org/deep-dive/#callbacks
    for( let e of EVENTS ) {
      if( !Ember.isEmpty(this.get(e)) ) {
        callbacks[e] = this.get(e);
      }
    }

    return callbacks;
  }),

  options: Ember.computed( function() {
    let options = {
      height: this.get('height'),
      minHeight: this.get('minHeight'),
      maxHeight: this.get('maxHeight'),
      focus: this.get('focus'),
      lang: this.get('lang'),
      toolbar: this.get('toolbar'),
      airMode: this.get('airMode'),
      popover: this.get('popover'),
      callbacks: this.get('callbacks')
    };

    Object.assign(options, this.get('extOptions'));

    return options;
  }),

  didInitAttrs() {
    Ember.assert("summernote has to exist on Ember.$.fn.summernote", typeof Ember.$.fn.summernote === "function" );
  },

  didInsertElement() {
    this.$('#summernote').summernote(this.get('options'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('#summernote').summernote('destroy');
  },

  contentDidUpdate(contents, $editable) {
    this.sendAction('onContentUpdated', contents, $editable);
  }

});
