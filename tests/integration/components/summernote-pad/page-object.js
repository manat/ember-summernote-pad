export default class SummernotePage {
  get selector() {
    return {
      'editor': '#summernote',
      'note': '.note-editor.note-frame',
      'editingArea': '.note-editing-area',
      'editingBody': '.note-editable.panel-body',
      'toolbar': 'note-toolbar panel-heading'
    };
  }

  get summernote() {
    return $(this.selector.editor);
  }

  get value() {
    return $(this.selector.editingBody).text().trim();
  }
}
