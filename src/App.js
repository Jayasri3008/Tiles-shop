import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import "./App.css";




export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (tile) => setCart([...cart, tile]);
  const removeFromCart = (index) => {
    const next = [...cart];
    next.splice(index, 1);
    setCart(next);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}
