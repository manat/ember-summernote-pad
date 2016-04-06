export default class SummernotePage {
  get selector() {
    return {
      'note': '.note-editor.note-frame',
      'editingArea': '.note-editing-area',
      'editingBody': '.note-editable.panel-body'
    };
  }

  get value() {
    return $(this.selector.editingBody).text().trim();
  }
}
