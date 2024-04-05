// App.js
import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import BuyList from './components/BuyList';
import data from './data';

function App() {
  const [totalBalance, setTotalBalance] = useState(10000000);
  const [boughtItems, setBoughtItems] = useState([]);
 

  const handleSell = (totalPrice, productName, quantity) => {
    setTotalBalance((prevBalance) => prevBalance + totalPrice);
    updateBuyList(productName, -quantity, -totalPrice);
  };

  const handleBuy = (totalPrice, productName, quantity) => {
    setTotalBalance((prevBalance) => prevBalance - totalPrice);
    updateBuyList(productName, quantity, totalPrice);
  };

  const updateBuyList = (productName, quantity, totalPrice) => {
    const existingItemIndex = boughtItems.findIndex((item) => item.productName === productName);
  
    if (existingItemIndex !== -1) {
      const updatedBoughtItems = [...boughtItems];
      updatedBoughtItems[existingItemIndex].quantity += quantity;
      updatedBoughtItems[existingItemIndex].totalPrice += totalPrice;
      setBoughtItems(updatedBoughtItems.filter(item => item.quantity > 0)); // filter to remove items with quantity 0
    } else {
      const newBoughtItem = {
        productName,
        quantity,
        totalPrice,
      };
      setBoughtItems((prevItems) => [...prevItems, newBoughtItem]);
    }
  };

  const productList = data.map((item) => {
    return (
      <Products
        key={item.id}
        img={item.img}
        productName={item.name}
        productPrice={item.price}
        onSell={handleSell}
        onBuy={handleBuy}
        totalBalance={totalBalance}
      />
    );
  });

  return (
    <>
      <p>Total Balance: $ {totalBalance}</p>
      <div className='productList'>
      {productList}
      </div>
      <BuyList boughtItems={boughtItems} />
    </>
  );
}

export default App;
