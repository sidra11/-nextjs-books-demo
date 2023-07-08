 import { MongoClient,ObjectId } from "mongodb";
 import BookSeries from "@/components/books/BookSeries";
  import Head from "next/head";
import { Fragment } from "react";

 function BookDetails(props){
    return (<Fragment><Head><title>{props.bookData.title}</title><meta  name="description" content= {props.bookData.description}/></Head>
    <BookSeries 
        image={props.bookData.image}
        title={props.bookData.title}
        author={props.bookData.author}
        description={props.bookData.description} /> </Fragment>  );   
 }
 export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://sid-next:Book2023@cluster0.puvqn.mongodb.net/books?retryWrites=true&w=majority"
      );
      const db = client.db();
      const bookDetailCollection = db.collection("books");
      const booksDetailList = await bookDetailCollection.find({}, {_id:1}).toArray();
     client.close();
     return {
        fallback: false,
        paths: booksDetailList.map((item) => ({params: {bookId:item._id.toString()}, })),
     }
   
    
 }
  export async function getStaticProps(context){
    const bookId = context.params.bookId;
    const client = await MongoClient.connect(
        "mongodb+srv://sid-next:Book2023@cluster0.puvqn.mongodb.net/books?retryWrites=true&w=majority"
      );
      const db = client.db();
      const bookCollection = db.collection("books");
      const selectedBoook = await bookCollection.findOne({_id: ObjectId(bookId
    )});
    console.log(selectedBoook);
      client.close();

   
    return {
        props: {
            bookData:{
                id:selectedBoook._id.toString(),
                title: selectedBoook.title,
                image:selectedBoook.image,
                description: selectedBoook.description,
                author: selectedBoook.author
            }
        }
    }
  }
 
 export default BookDetails;