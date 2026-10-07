import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity = 1) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { ...product, quantity }];
    });
  }

  function removeFromCart(productId) {
    setCart((current) => current.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (Number.isNaN(quantity)) return;
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ cart, addToCart, removeFromCart, updateQuantity }} />
    </>
  );
}

export default App;
