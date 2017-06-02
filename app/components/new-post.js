import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost1() {
        var params = {
          author: this.get('author'),
          question: this.get('question'),
          explanation: this.get('explanation'),

        };
        this.set('addNewPost', false);
        this.sendAction('savePost2', params);
      }
    }
  });
