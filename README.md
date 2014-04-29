Order
=====
Make an app for restaurants to keep track of their customers' orders.

As a restaurant owner, I want to add tables to my restaurant, so that our servers can keep track of the bill at each table.

As a restaurant owner, I want to add an item to our menu, so that our servers can note when a table has ordered that item.

As a server, I want to choose a table and add an item to its bill, so that I can keep track of what the table has ordered. Hint: read the Ember guides on relationships in models.

As a server, I want to see the total bill for a table, so I know how much to charge my customers. Hint: read the Ember guides on defining attributes on models, specifically that part on computed properties.

As a restaurant owner, I want my users to log in, so that hooligans can't mess with our site. Hint: Ember unfortunately doesn't have a standard way to handle authentication, but the most common is to use an auth token in your request headers. This most popular plugin for this approach is Ember.SimpleAuth. They have a nice version that is compatible with Devise, but it requires some modifications to Devise. The README is pretty incomplete, so I opened a pull request with a better walk-through; until it's merged, you can check it out on my fork.
