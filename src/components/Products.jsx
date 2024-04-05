// Products.js
import React, { useState } from 'react';

function Products(props) {
  const { productName, productPrice, onSell, onBuy, totalBalance, boughtItems, setBoughtItems } = props;
  const [quantity, setQuantity] = useState(0);

  const sellItem = () => {
    if (quantity > 0) {
      const totalPrice = productPrice;
      onSell(totalPrice, productName, 1); 
      setQuantity(quantity - 1);
  
      if (quantity === 1) {
        removeFromBuyList();
      }
    }
  };

  const buyItem = () => {
    const totalPrice = productPrice;

    if (totalBalance >= totalPrice) {
      onBuy(totalPrice, productName, 1); // Always buy 1 unit at a time
      setQuantity(quantity + 1);
    } else {
      console.log("Balance is not enough.");
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);

    if (e.target.value === "" || e.target.value === "0") {
      setQuantity(0);
      onSell(productPrice * quantity, productName, quantity);
      removeFromBuyList();
      return;
    }

    if (isNaN(newQuantity) || newQuantity < 0) {
      console.log("Please enter a valid quantity!");
      return;
    }

    const quantityChange = newQuantity - quantity;
    const totalPriceChange = productPrice * quantityChange;

    if (totalBalance >= totalPriceChange && newQuantity >= 0) {
      setQuantity(newQuantity);

      if (quantityChange > 0) {
        onBuy(totalPriceChange, productName, quantityChange);
      } else if (quantityChange < 0) {
        onSell(-totalPriceChange, productName, -quantityChange);

        if (newQuantity === 0) {
          removeFromBuyList();
        }
      }
    } else {
      console.log("Balance is not enough.");
    }
  };

  const removeFromBuyList = () => {
    const updatedBoughtItems = boughtItems.filter((item) => item.productName !== productName);
    setBoughtItems(updatedBoughtItems);
  };

  return (
    <div>
      <img src={props.img} alt={productName} />
      <p>{productName}</p>
      <p>$ {productPrice}</p>
      <div>
        <button onClick={sellItem}>Sell</button>
        <input
          type="text"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={buyItem}>Buy</button>
      </div>
    </div>
  );
}

export default Products;
