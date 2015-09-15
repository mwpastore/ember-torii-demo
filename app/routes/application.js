import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(providerName) {
      this.get('toriiSession').open(providerName).then(() => {
        this.transitionTo('protected.c');
      });
    },

    logout() {
      this.get('toriiSession').close().then(() => {
        this.transitionTo('a');
      });
    },

    accessDenied() {
      this.transitionTo('b');
    },

    linkTo(providerName) {
      this.get('torii').open(providerName).then((results) => {
        window.alert(`You can now do something with OAuth2 code ${results.authorizationCode} from ${results.provider}!`);
      });
    }
  }
});
