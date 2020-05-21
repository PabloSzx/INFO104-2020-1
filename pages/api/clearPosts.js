import { db } from "../../src/api/db";

export default (req, res) => {
  db.get("posts").remove().write();

  res.send(db.get("posts").value());
};
