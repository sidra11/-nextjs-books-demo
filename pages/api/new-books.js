import { MongoClient } from "mongodb";


async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sid-next:Book2023@cluster0.puvqn.mongodb.net/books?retryWrites=true&w=majority"
    );
    const db = client.db();
    const bookCollection = db.collection("books");
    const result = await bookCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Bookis inserted" });
  }
}
export default handler;
