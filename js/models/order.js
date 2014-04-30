Orders.Food = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  tables: DS.hasMany('table', {async: true})
});

Orders.Table = DS.Model.extend({
  name: DS.attr('string'),
  foods: DS.hasMany('food', {async: true})
});

Orders.Table.FIXTURES = [
  {
    id: 1,
    name: "Fire",
    foods: [1, 2] 
  },
  {
    id: 2,
    name: "Water",
    foods: [2, 2] 
  },
  {
    id: 3,
    name: "Air",
    foods: [1, 3, 2] 
  },
  {
    id: 4,
    name: "Earth",
    foods: [1] 
  }
];

Orders.Food.FIXTURES = [
{
    id: 1,
    name: "Mango",
    description: "A delicious treat.",
    price: 10.0
  },
  {
    id: 2,
    name: "Coconut",
    description: "A yucky treat.",
    price: 2.0
  },
  {
    id: 3,
    name: "Papaya",
    description: "A tropical treat.",
    price: 3.0
  }
];
