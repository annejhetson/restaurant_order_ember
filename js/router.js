Orders.Router.map(function(){
  this.resource('tables', { path: '/'}, function() {
    this.resource('foods');
  });
  this.resource('table', { path: 'tables/:id'});
});


Orders.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Orders.TableRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table', params.id);
  }
});

Orders.FoodsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('food');
  }
});

Orders.TablesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('tables');
  }
});
