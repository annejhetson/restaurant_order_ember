Orders.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      var name = this.get('newTableNumber')

      var table = this.store.createRecord('table', {
        name: name
      });

      this.set('newTableNumber', '');

      table.save();
    }
  }
});
