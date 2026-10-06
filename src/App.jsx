import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";


function App() {
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}

export default App;