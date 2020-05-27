const Knex = require("knex");

/**
 * @param knex {Knex}
 */
exports.up = async function (knex) {
  await knex.schema.createTable("posts", (t) => {
    t.increments("id");
  });
};

/**
 * @param knex {Knex}
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("posts");
};
