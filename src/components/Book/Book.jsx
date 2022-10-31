import React, { useState } from "react";
import "./Book.scss";

export default function Book({ book, addItemToCart, removeItemFromCart }) {
  let [amountInCart, setAmountInCart] = useState(0);

  const addToCart = () => {
    setAmountInCart(amountInCart + 1);
    addItemToCart(book.id);
  };
  const removeFromCart = () => {
    setAmountInCart(Math.max(0, amountInCart - 1));
    removeItemFromCart(book.id);
  };

  return (
    <li className="book">
      <img
        className="book__image"
        src={book.image}
        alt={book.title}
        style={{ width: "3rem", border: "1px solid black" }}
      />
      {book.title}
      <div className="buttons">
        <button className="button button_plus" onClick={addToCart}>
          +
        </button>
        <p>{amountInCart}</p>
        <button className="button button_minus" onClick={removeFromCart}>
          -
        </button>
      </div>
    </li>
  );
}
