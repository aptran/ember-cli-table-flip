import Ember from 'ember';
import layout from '../templates/components/table-flip';

const emoticonStyles = {
  'default': '(╯°□°）╯︵ ┻━┻',
  'reset': '┬─┬ ︵ ノ(°_° ノ)',
};

const {
  get,
  computed,
  Component,
} = Ember;

export default Component.extend({
  classNames: ['table-flip'],
  layout,
  emoticonStyle: 'default',

  emoticon: computed('emoticonOption', function emoticon() {
    const style = get(this, 'emoticonStyle');
    if (emoticonStyles.hasOwnProperty(style)) {
      return emoticonStyles[style];
    }
    return emoticonStyles['default'];
  }),
});
