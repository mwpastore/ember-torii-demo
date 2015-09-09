import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(providerName) {
      const route = this;
      this.get('session').open(providerName).then(() => {
        route.transitionTo('protected.c');
      });
    },

    logout() {
      const route = this;
      this.get('session').close().then(() => {
        route.transitionTo('a');
      });
    },

    accessDenied() {
      this.transitionTo('b');
    }
  }
});
