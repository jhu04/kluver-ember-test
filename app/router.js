import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts');

  this.route('posts_by_id', {
    path: '/posts/:post_id',
  });

  this.route('a', function () {
    this.route('b', function () {
      this.route('c', function () {
        this.route('d');
      });
    });
  });
  this.route('albums');

  this.route('album', {
    path: '/albums/:album_id',
  });
});
