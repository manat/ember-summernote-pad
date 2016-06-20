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
  assert.equal(summernote.value, 'Hello, Summernote');
});

test('it renders with placeholder', function(assert) {
  this.render(hbs`{{summernote-pad placeholder="write here..."}}`);
  assert.equal(summernote.value, "write here...");
});

test('it calls onInit after initialized', function(assert) {
  this.on('init', ()=> {
    //summernote is created
    assert.ok(true, "onInit is called.");
  });

  this.render(hbs `{{summernote-pad onInit=(action "init")}}`);
});
