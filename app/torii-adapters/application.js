import Ember from 'ember';

export default Ember.Object.extend({
  providerName: null,

  init(providerName) {
    this._super();
    this.providerName = providerName;
  },

  open(postData) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      return Ember.$.ajax({
        dataType: 'json',
        method: 'POST',
        url: '/api/session/start',
        contentType: 'application/json',
        data: JSON.stringify(postData),
        processData: false,
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  },

  fetch() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      return Ember.$.ajax({
        dataType: 'json',
        method: 'GET',
        url: '/api/session/info',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  },

  close() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      return Ember.$.ajax({
        dataType: 'json',
        method: 'POST',
        url: '/api/session/end',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
