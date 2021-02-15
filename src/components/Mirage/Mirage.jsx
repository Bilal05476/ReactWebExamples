import React, { useEffect, useState } from "react";

const Mirage = () => {
  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    setInterval(() => {
      fetch("/api/books")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
        });
    }, 2000);
  }, []);

  const handleBook = () => {
    const title = prompt("Enter Book Title");
    const author = prompt("Enter Book Author");

    if (!title || !author) return false;
    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, author }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  if (!books.length) return <h4>Loading ... </h4>;
  return (
    <div>
      <h1>Available Books: {books.length}</h1>
      <ul>
        {books.map((book) => {
          return (
            <div key={book.id}>
              <li>Book: {book.title}</li>
              <li>Author: {book.author}</li>
            </div>
          );
        })}
      </ul>
      <button onClick={handleBook}>Add Book</button>
    </div>
  );
};
export default Mirage;
