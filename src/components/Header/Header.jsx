import React from "react";
import "./Header.scss";

export default function Header({ cart_items_nr }) {
  return (
    <header>
      HEADER
      <div className="cart">{cart_items_nr} items in cart</div>
    </header>
  );
}
