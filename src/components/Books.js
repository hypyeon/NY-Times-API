import React, { useState, useEffect } from "react";

export default function Books() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setBooks(jsonifiedResponse.results.books)
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoaded(true)
      });
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Today's Top 10 Best Sellers</h1>
        <div id="list">
          {books.slice(0, 10).map((book, index) => 
            <div key={index} className="book" id={book.rank}>
              <h3>#{book.rank}: {book.title}</h3>
              <h4>By {book.author}</h4>
              <div className="bookImg">
                <img src={book.book_image} alt={book.title} />
                <div className="detail">
                  <p>{book.description}</p>
                  <a href={book.amazon_product_url} target="_blank">Buy Online
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}