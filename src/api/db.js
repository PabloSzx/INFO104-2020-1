import LowDb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export const db = LowDb(new FileSync("./db.json"));

db.defaults({
  posts: [],
}).write();
