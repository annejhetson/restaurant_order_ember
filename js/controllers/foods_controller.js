Orders.FoodsController = Ember.ArrayController.extend({
  actions: {
    createFood: function() {
      var name = this.get('newFoodName')
      var description = this.get('newFoodDescription')
      var price = this.get('newFoodPrice')

      var food = this.store.createRecord('food', {
        name: name,
        description: description,
        price: price
      });

      this.set('newFoodName', '');
      this.set('newFoodDescription', '');
      this.set('newFoodPrice', '');

      food.save();
    }
  }
});
