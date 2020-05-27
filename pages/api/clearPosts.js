import { db } from "../../src/api/db";

export default async (req, res) => {
  await db("posts").delete();

  res.send(await db("posts").select("*"));
};
