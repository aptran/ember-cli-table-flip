import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-flip', 'Integration | Component | table flip', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{table-flip}}`);
  assert.equal(this.$().text().trim(), '(╯°□°）╯︵ ┻━┻',
    'it renders the default emoticon style');

  this.set('emoticonStyle', 'reset');
  this.render(hbs`{{table-flip emoticonStyle=emoticonStyle}}`);
  assert.equal(this.$().text().trim(), '┬─┬ ︵ ノ(°_° ノ)',
    'it renders the reset emoticon style');

});
