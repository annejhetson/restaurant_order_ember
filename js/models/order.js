// Orders.Order = DS.Model.extend({
//   foods: DS.hasMany('food'),
//   item: DS.attr('string'),
//   price: DS.attr('float')
// });

Orders.Food = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number')
});

// Orders.Ticket = DS.Model.extend({
//   table_id: DS.attr('integer')
// });

Orders.Table = DS.Model.extend({
  name: DS.attr('string'),
  foods: DS.hasMany('food')
});


// Orders.Order.FIXTURES = [
//   {
//     id: 1,
//     food_id: 2,
//     ticket_id: 1
//   },
//   {
//     id: 2,
//     food_id: 1,
//     ticket_id: 2
//   },
//   {
//     id: 3,
//     food_id: 3,
//     ticket_id: 3
//   }
// ];

Orders.Table.FIXTURES = [
  {
    id: 1,
    name: "Fire"
  },
  {
    id: 2,
    name: "Water"
  },
  {
    id: 3,
    name: "Air"
  },
  {
    id: 4,
    name: "Earth"
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

// Orders.Ticket.FIXTURES = [
// {
//     id: 1,
//     table_id: 1
//   },
//   {
//     id: 2,
//     table_id: 1
//   },
//   {
//     id: 3,
//     table_id: 3
//   }
// ];
