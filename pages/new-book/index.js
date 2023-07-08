import NewBookForm from "@/components/books/NewBookForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function NewBookPage() {
  const router = useRouter();
  async function addNewBookHandler(enteredBookData) {
    try {
      const response = await fetch("/api/new-books", {
        method: "POST",
        body: JSON.stringify(enteredBookData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Handle the JSON data here
    } catch (error) {
      console.error("Error:", error);
    }

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>My Books</title>
        <meta name="description" content="Add your books in my library " />
      </Head>
      <NewBookForm onAddbook={addNewBookHandler} />
    </Fragment>
  );
}

export default NewBookPage;
