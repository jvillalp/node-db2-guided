//up describes the changes that will be applied to the database
exports.up = function(knex) {
  //create veggie tables
  return knex.schema.createTable("vegetables", tbl => { //remember to return
    //a primary key, named id, type integer, autoincrement
    tbl.increments();

    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();

    tbl.boolean("favorite").defaultTo(false);
  });
};
//down describes how to undo the changes from the up function
exports.down = function(knex) {
  //remove (drop) the veggies tables
  return knex.schema.dropTableIfExists("vegetables");
};
