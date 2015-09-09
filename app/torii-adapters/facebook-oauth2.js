import ApplicationAdapter from '../torii-adapters/application';

export default ApplicationAdapter.extend({
  init() {
    this._super('facebook');
  },

  open({authorizationCode}) {
    return this._super({
      provider: this.providerName,
      credentials: {
        token: authorizationCode
      }
    });
  }
});
