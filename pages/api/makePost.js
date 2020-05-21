import { db } from "../../src/api/db";

import * as yup from "yup";

const postSchema = yup.object().shape({
  title: yup.string().min(1).max(100),
  content: yup.string().min(1),
});

export default async (req, res) => {
  try {
    const post = await postSchema.validate(req.body);

    db.get("posts")
      .push({ ...post, date: new Date().toLocaleString() })
      .write();

    res.send(db.get("posts"));
  } catch (err) {
    res.status(400).send("Invalid post!");
  }
};
