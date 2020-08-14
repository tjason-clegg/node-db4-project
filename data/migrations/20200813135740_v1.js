exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.real("quantity").notNullable();
      tbl.string("unit").notNullable();
      tbl.string("notes").defaultTo("none");
      tbl.integer("recipe_id").notNullable();
    })

    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("step_number").notNullable();
      tbl.string("description").notNullable();
      tbl.integer("recipe_id").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
