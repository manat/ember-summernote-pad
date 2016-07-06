import SummernotePage from './page-object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const summernote = new SummernotePage();

moduleForComponent('summernote-pad', 'Integration | Component | summernote pad', {
  integration: true
});

test('it renders with default options', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{summernote-pad}}`);

  assert.ok(summernote.isVisible(), 'Summernote should be present.');
  assert.ok(summernote.isToolbarVisible(), 'Summernote toolbar should be present.');
  assert.ok(summernote.isEditingAreaVisible(), 'Summernote editing area should be present.');
  assert.ok(summernote.isStatusbarVisible(), 'Summernote statusbar should be present.');
  assert.ok(summernote.hasDefaultToolbar(), 'Summernote should has toolbar with default options.');

  assert.equal(summernote.value, 'Hello, Summernote');

});

test('it renders with a placeholder', function(assert) {
  this.render(hbs`{{summernote-pad placeholder="write here..."}}`);
  assert.equal(summernote.value, "write here...");
});

test('it renders with a custom toolbar', function(assert) {
  this.set('toolbar', [ ['style', ['style']], ['insert', ['link', 'picture', 'video']]] );
  this.render(hbs`{{summernote-pad toolbar=toolbar}}`);

  assert.ok(summernote.hasStyleButtonGroup(), 'Summernote has style button group on toolbar.');
  assert.ok(summernote.hasInsertButtonGroup(), 'Summernote has insert button group on toolbar.');
});

test('it renders with a specific height', function(assert) {
  this.render(hbs`{{summernote-pad height=150}}`);
  assert.equal(summernote.height, 150);
});

test('it calls onInit after initialized', function(assert) {
  this.on('init', ()=> {
    assert.ok(true, "onInit is called.");
  });

  this.render(hbs `{{summernote-pad onInit=(action "init")}}`);
});

// test('it calls onEnter', function(assert) {
//   this.on('enter', ()=> {
//     assert.ok(true, "onEnter is called.");
//   });

//   this.render(hbs `{{summernote-pad onEnter=(action "enter")}}`);
//   summernote.pressEnter();
// });

test('it calls onFocus', function(assert) {
  this.on('focus', ()=> {
    assert.ok(true, "onFocus is called.");
  });

  this.render(hbs `{{summernote-pad onFocus=(action "focus")}}`);
  summernote.focusIn();
});

test('it calls onBlur', function(assert) {
  this.on('blur', ()=> {
    assert.ok(true, "onBlur is called.");
  });

  this.render(hbs `{{summernote-pad onBlur=(action "blur")}}`);
  summernote.focusOut();
});




