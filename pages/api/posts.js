import { db } from "../../src/api/db";
import { loremIpsum } from "lorem-ipsum";

export default (req, res) => {
  db.get("posts")
    .push({
      title: loremIpsum({ count: 3, units: "words" }),
      content: loremIpsum({ count: 5 }),
      date: new Date().toLocaleString(),
    })
    .write();

  res.send(db.get("posts"));
};
