export default class SummernotePage {

  get selector() {
    return {
      'editor': '#summernote',
      'note': '.note-editor.note-frame',
      'editingArea': '.note-editing-area',
      'editingBody': '.note-editable.panel-body',
      'toolbar': '.note-toolbar',
      'statusbar': '.note-statusbar',
      'noteStyleButtonGroup': '.note-btn-group.note-style',
      'noteTextStyleButtonGroup': '.note-btn-group.note-text-style',
      'noteParaButtonGroup': '.note-btn-group.note-para',
      'noteTableButtonGroup': '.note-btn-group.note-table',
      'noteInsertButtonGroup': '.note-btn-group.note-insert'
    };
  }

  get summernote() {
    return $(this.selector.editor);
  }

  get value() {
    return $(this.selector.editingBody).text().trim();
  }

  get height() {
    return $(this.selector.editingArea).height();
  }

  isVisible() {
    return $(this.selector.note).is(':visible');
  }

  isToolbarVisible() {
    return $(this.selector.toolbar).is(':visible');
  }

  isEditingAreaVisible() {
    return $(this.selector.editingArea).is(':visible');
  }

  isStatusbarVisible() {
    return $(this.selector.statusbar).is(':visible');
  }

  hasStyleButtonGroup() {
    var styleBtnGroup = $(this.selector.noteStyleButtonGroup);
    return styleBtnGroup.is(':visible') && styleBtnGroup.find('button').length === 1 && styleBtnGroup.has('i.note-icon-magic');
  }

  hasTextStyleButtonGroup() {
    var textStyleBtnGroup = $(this.selector.noteTextStyleButtonGroup);
    return textStyleBtnGroup.is(':visible') && textStyleBtnGroup.find('button').length === 3 && textStyleBtnGroup.has('i.note-icon-bold') && textStyleBtnGroup.has('i.note-icon-underline') && textStyleBtnGroup.has('i.note-icon-eraser');
  }

  hasParaButtonGroup() {
    var paraBtnGroup = $(this.selector.noteParaButtonGroup);
    return paraBtnGroup.is(':visible') && paraBtnGroup.find('button').length === 9 && paraBtnGroup.has('i.note-icon-unorderedlist') && paraBtnGroup.has('i.note-icon-orderedlist') && paraBtnGroup.has('i.note-icon-align-left');
  }

  hasTableButtonGroup() {
    var tableBtnGroup = $(this.selector.noteTableButtonGroup);
    return tableBtnGroup.is(':visible') && tableBtnGroup.find('button').length === 1 && tableBtnGroup.has('i.note-icon-table');
  }

  hasInsertButtonGroup() {
    var insertBtnGroup = $(this.selector.noteInsertButtonGroup);
    return insertBtnGroup.is(':visible') && insertBtnGroup.find('button').length === 3 && insertBtnGroup.has('i.note-icon-link') && insertBtnGroup.has('i.note-icon-picture') && insertBtnGroup.has('i.note-icon-video');
  }

  hasDefaultToolbar() {
    return this.hasStyleButtonGroup() && this.hasTextStyleButtonGroup() && this.hasParaButtonGroup() && this.hasTableButtonGroup() && this.hasInsertButtonGroup();
  }

  focusIn() {
    $(this.selector.editingBody).focus();
    return;
  }

  focusOut() {
    $(this.selector.editingBody).blur();
    return;
  }

  pressEnter() {
    var e = $.Event( "keypress", { which: 13, keyCode: 13 } );
    $(this.selector.editingBody).trigger(e);
  }

}
