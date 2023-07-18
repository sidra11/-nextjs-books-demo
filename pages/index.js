import Head from "next/head";
import BookList from "../components/books/BookList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>My Book Collection </title>
        <meta name='description' content='Browse my Book collection'></meta>
      </Head>
      <BookList books={props.books} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sid-next:Book2023@cluster0.puvqn.mongodb.net/books?retryWrites=true&w=majority"
  );
  const db = client.db();
  const bookCollection = db.collection("books");
  const booksList = await bookCollection.find().toArray();
  client.close();
  return {
    props: {
      books: booksList.map((book) => ({
        title: book.title,
        image: book.image,
        description: book.description,
        author: book.author,
        id: book._id.toString(),
      })),
      revalidate: 1,
    },
  };
}
export default HomePage;
