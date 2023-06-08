import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import SearchBar from "../components/SearchBar";

function CategoryPage({ categories }) {
  const parsedCategories = categories.map((category) => JSON.parse(category));
  const [searchQuery, setsearchQuery] = useState("");

  const handleSearch = (event) => {
    setsearchQuery(event.target.value);
  };

  const filteredCategories = parsedCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h1>Category</h1>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredCategories.map((category, index) => (
              <CategoryCard name={category.name} image={category.image} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;
