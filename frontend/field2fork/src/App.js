import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import IndexPage from "./pages/IndexPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [categories, setcategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4567/categories")
      .then((response) => response.json())
      .then((data) => setcategories(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4567/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          {categories.length > 0 && (
            <Route
              path="/categories"
              element={<CategoryPage categories={categories} />}
            />
          )}
          {products.length > 0 && (
            <Route
              path="/products"
              element={<ProductPage products={products} />}
            />
          )}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
