import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mne-story-image-list', 'Integration | Component | mne story image list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mne-story-image-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mne-story-image-list}}
      template block text
    {{/mne-story-image-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
