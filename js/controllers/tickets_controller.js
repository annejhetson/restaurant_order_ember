Orders.TicketsController = Ember.ArrayController.extend({
  actions: {
    createTicket: function() {
      var table_id = this.get('newTableNumber')
      if (!table_id.trim()) { return; }

      var ticket = this.store.createRecord('ticket', {
        table_id: table_id
      });

      this.set('newTableNumber', '');
      todo.save();
    }
  }
});
