import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('a');
  this.route('b');
  // Change the protected routes to this.authenticatedRoute()!
  //this.route('protected', function() {
  this.authenticatedRoute('protected', function() {
    this.route('c');
    this.route('d');
  });
});

export default Router;
