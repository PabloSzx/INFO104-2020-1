import { db } from "../../src/api/db";

export default async (req, res) => {
  await db("posts").insert({});

  const data = await db("posts").select("*");

  res.send(data);
};
