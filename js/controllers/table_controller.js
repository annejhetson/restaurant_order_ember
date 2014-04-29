Orders.TableController = Ember.ObjectController.extend({
  actions: {
    deleteTable: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
