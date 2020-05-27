import knex from "knex";

export const db = knex(require("../../knexfile")[process.env.NODE_ENV]);

// Cambiar "remake" a "true" para borrar las tablas y crearlas denuevo.
// Util cuando se hace una modificación a las tablas
const remake = false;
if (remake) {
  db.migrate
    .down()
    .then(() => {
      console.warn("| ¡Tablas reiniciadas! |");
    })
    .catch(console.error)
    .finally(() => {
      db.migrate.latest().catch(console.error);
    });
} else {
  db.migrate.latest().catch(console.error);
}
