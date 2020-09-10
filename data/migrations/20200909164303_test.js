exports.up = function (knex) {
  return (
    knex.schema
      // creates the new table tests
      .createTable("tests", function (test) {
        // makes the primary key also known as id
        test.increments();
        //                   notnullable is required   unique same name can only be used once
        test.string("name", 20).notNullable().unique();
        test.integer("age", 10).date().notNullable();
        test.string("city", 50);
        test.string("country", 165);
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tests");
};
