exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredients_name: 'eggs, eggs, more eggs', ingredients_price: 3 },
        { ingredients_name: 'cheese, macaroni', ingredients_price: 4 },
        { ingredients_name: 'milk, chocolate syrup', ingredients_price: 2 },
      ]);
    });
};
