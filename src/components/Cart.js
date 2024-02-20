// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
const Cart = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('/api/cart'); // Replace with your actual endpoint
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  if (!cartData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>Shopping Cart</h2>
      <ul className='list-group'>
        {cartData.items.map((item) => (
      <li key={item.id} className='list-group-item'>
            {item.name} - ${item.price}
          </li>
    ))}
      </ul>
      <p>Total: ${cartData.total}</p>
    </div>
    );
};

export default Cart;