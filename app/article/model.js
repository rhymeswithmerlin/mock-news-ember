import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  imageUrl: DS.attr('string'),
  publishDate: DS.attr('date')
});
