import SummernotePage from './page-object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const summernote = new SummernotePage();

moduleForComponent('summernote-pad', 'Integration | Component | summernote pad', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{summernote-pad}}`);

  assert.equal(summernote.value, 'Hello Summernote');
});
