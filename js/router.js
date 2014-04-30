Orders.Router.map(function(){
  this.resource('tables', { path: '/' }, function(){
    this.resource('table', {path: '/table/:id'}, function(){
      this.resource('foods', { path: '/foods'});
    });
  });
});


Orders.TablesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('table', params.id);
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
