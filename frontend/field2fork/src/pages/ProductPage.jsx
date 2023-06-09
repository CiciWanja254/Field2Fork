import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductLIst from "../components/ProductList";
import SearchBar from "../components/SearchBar";

export default function ProductPage({ products }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) => {
    const seller = JSON.parse(product.seller);
    const searchTerm = searchQuery.toLowerCase();

    if (product.seller_type === "Farmer") {
      console.log("Farmer");
      if (seller.farm_name) {
        return seller.farm_name.toLowerCase().includes(searchTerm);
      }
    }

    if (product.seller_type === "Wholesaler") {
      console.log("Wholesaler");
      if (seller.company_name) {
        return seller.company_name.toLowerCase().includes(searchTerm);
      }
    }
  });

  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <ProductLIst
            products={filteredProducts}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
