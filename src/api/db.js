import knex from "knex";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  createEnvFile();
}
dotenv.config();

export const db = knex({
  client: "mysql",
  connection: {
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port,
  },
});

db.schema.hasTable("asd").then((hasAsd) => {
  console.log({
    hasAsd,
  });
});

async function createEnvFile() {
  const dotEnvLocation = path.resolve(process.cwd(), ".env");
  const envFileExists = fs.existsSync(dotEnvLocation);

  if (!envFileExists) {
    fs.writeFileSync(
      dotEnvLocation,
      `
db_host=localhost
db_user=root
db_password=
db_port=3306
db_database=ores
    `.trim(),
      {
        encoding: "utf-8",
      }
    );
  }
}
