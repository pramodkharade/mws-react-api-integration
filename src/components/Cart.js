// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {

    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCartData(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
  const handleOrder = async () => {
    try {
      // Assuming you have a mock post API endpoint for placing orders
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData.items),
      });

      const orderData = await orderResponse.json();

      // Update the order status and display success message
      setOrderStatus(orderData.message);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  const handleToasterClose = () => {
    // Close the toaster and reset the order status
    setOrderStatus(null);
  };
  if (!cartData) {
    return <p>Loading...</p>;
  }
  console.log("orderStatus:", orderStatus);
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <ul className="list-group">
        {cartData.items.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <p className="mt-3">Total: {cartData.total}</p>
      {/* Order button */}
      <button className="btn btn-primary" onClick={handleOrder}>
        Place Order
      </button>

      {orderStatus && (
        <div className="position-fixed bottom-0 end-0 p-3">
          <div
            className="toast align-items-center text-white bg-success"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-bs-toggle="toast"
          >
            <div className="d-flex">
              <div className="toast-body">{orderStatus}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={handleToasterClose}
              ></button>
            </div>
          </div>
        </div>)}
    </div>
  );
};

export default Cart;