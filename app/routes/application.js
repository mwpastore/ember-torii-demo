import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(providerName) {
      const route = this;
      this.get('toriiSession').open(providerName).then(() => {
        route.transitionTo('protected.c');
      });
    },

    logout() {
      const route = this;
      this.get('toriiSession').close().then(() => {
        route.transitionTo('a');
      });
    },

    accessDenied() {
      this.transitionTo('b');
    }
  }
});
