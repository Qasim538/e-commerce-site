import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import SearchItem from "./Components/SearchItem";
import Cart from "./Components/Cart";
import { items } from "./Components/Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
