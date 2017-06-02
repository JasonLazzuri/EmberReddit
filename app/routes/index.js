import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
