import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://newsapi.org/v1',
  headers: {
    "X-Api-Key": "9240433c34b94f048670cc0c573c8cfb"
  }
});
