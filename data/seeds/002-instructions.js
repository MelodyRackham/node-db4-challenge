exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 3, description: 'mix eggs and put in skillet' },
        { recipe_id: 2, description: 'mix macaroni with cheese and cook' },
        { recipe_id: 1, description: 'stir milk and chocolate until smooth' },
      ]);
    });
};
