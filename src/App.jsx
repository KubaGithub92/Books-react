import { useEffect, useState } from "react";
import "./App.css";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"
    );
    const data = await res.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addItemToCart = (book_id) => {
    setCart([...cart, book_id]);
    console.log(book_id);
  };

  const removeItemFromCart = (book_id) => {
    // prepare a copy of the current state
    // of the cart (so that we don't change it)
    const copy = [...cart];

    // try to find the first occurence of this
    // book_id in the copy
    const found_at_index = copy.indexOf(book_id);

    // if found...
    if (found_at_index !== -1) {
      // ...remove it from the array
      // (this changes the array which is why we
      // did not want to do it on `cart`)
      copy.splice(found_at_index, 1);
    }

    // update the state with the new "cart" array,
    // sans the first found occurence of this book_id
    setCart(copy);
  };

  return (
    <>
      <Header cart_items_nr={cart.length} />
      <h1>Latest Books</h1>

      <ul className="books">
        {data === null ? (
          <div>Loading data</div>
        ) : (
          data.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
              />
            );
          })
        )}
      </ul>
    </>
  );
}

export default App;
