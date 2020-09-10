
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tests').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {id: 1, name: 'rtim', age: 6, city: "Boston"},
        {id: 2, name: 'ali', age: 3, city: "Denver"},
        {id: 3, name: 'richard', age: 10, city: "Sacramento"}
      ]);
    });
};
