// BuyList.js
import React from 'react';

function BuyList({ boughtItems }) {
  const totalPurchase = boughtItems.reduce((total, item) => total + item.totalPrice, 0);

  const styles={
        listStyleType: `none`
  }

  return (
    <div>
      <h2>Bought Items</h2>
      <ul>
        {boughtItems.map((item, index) => (
          <li key={index} style={styles}>
            {item.productName} - Quantity: x{item.quantity} - Total Price: ${item.totalPrice}
          </li>
        ))}
      </ul>
      <p>Total Purchase: ${totalPurchase}</p>
    </div>
  );
}

export default BuyList;
