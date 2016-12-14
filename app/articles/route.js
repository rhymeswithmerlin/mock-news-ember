import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  // return this.store.query('article', { source: 'the-next-web' });
  return Ember.RSVP.hash({
  nextWeb: this.store.query('article', { source: 'the-next-web' }),
  associatedPress: this.store.query('article', { source: 'associated-press' }),
  buzzFeed: this.store.query('article', { source: 'buzzfeed' }),
  reuters: this.store.query('article', { source: 'reuters' })
});
  },
  setupController(controller, models) {
    controller.set('nextWeb', models.nextWeb);
    controller.set('associatedPress', models.associatedPress);
    controller.set('buzzFeed', models.buzzFeed);
    controller.set('reuters', models.reuters);
  }
});
