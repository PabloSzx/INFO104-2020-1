(async () => {
  const config = require("./knexfile").development;
  const database = config.connection.database;
  config.connection.database = null;
  const knex = require("knex")(config);

  await knex.raw(`CREATE DATABASE IF NOT EXISTS ${database}`);
  await knex.destroy();
})();
