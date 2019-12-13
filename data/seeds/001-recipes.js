exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'eggs', instructions_id: 1 },
        { recipe_name: 'mac n cheese', instructions_id: 2 },
        { recipe_name: 'chocolate milk', instructions_id: 3 },
      ]);
    });
};
