import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://newsapi.org/v1',
  headers: {
  // "X-Api-Key": API_KEY
  }
});
