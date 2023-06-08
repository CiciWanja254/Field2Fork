import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductLIst from "../components/ProductList";
import SearchBar from "../components/SearchBar";

export default function ProductPage({ products }) {
  const parsedProducts = products.map((product) => JSON.parse(product));
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the products based on the search query
  const filteredProducts = parsedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <ProductLIst products={parsedProducts} handleSearch={handleSearch} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
