import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import ProductLIst from "../components/ProductList";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { name, id } = useParams();
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Use the extracted ID as needed
  console.log("Page ID:", id);
  console.log("Page NAME:", name);

  useEffect(() => {
    fetch(`http://localhost:4567/products/${name}/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products:", error));

    fetch("http://localhost:4567/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Failed to fetch reviews:", error));
  }, []);

  return (
    <div>
      <Header />
      <ProfileCard />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <MyProductList products={products} />
          <ReviewsSection />
          <JoinSection />
          <WholesaleSourcing />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProfilePage;

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  // Simulating reviews for demonstration purposes
  useEffect(() => {
    const newReviews = [
      {
        id: 1,
        user: "John Doe",
        message: "Great product! Highly recommended.",
        timestamp: "June 1, 2023, 10:30 AM",
      },
      {
        id: 2,
        user: "Jane Smith",
        message: "Excellent service. Will definitely buy again.",
        timestamp: "June 2, 2023, 3:45 PM",
      },
      {
        id: 3,
        user: "Mike Johnson",
        message: "The quality exceeded my expectations. Well done!",
        timestamp: "June 3, 2023, 8:15 AM",
      },
    ];
    setReviews(newReviews);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mt-8 mb-8">
      <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-4">
        Reviews
      </h2>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="flex items-start">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://i.pinimg.com/564x/3d/91/09/3d910919cf4d41c1114457504dc29201.jpg"
              alt="Avatar"
            />
            <div>
              <p className="font-bold">{review.user}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {review.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {review.timestamp}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
function WholesaleSourcing() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mt-8 p-8 md:p-12 mb-8">
      <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        Revolutionizing Wholesale Sourcing
      </h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
        Revolutionize your wholesale sourcing with Field2Fork, the app that
        directly connects you to trusted farmers, streamlining the process for
        unmatched efficiency and success.
      </p>
      <a
        href="#"
        className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Join
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
    </div>
  );
}

function JoinSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
      <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        Empowering Farmers for Prosperous Connections
      </h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
        Experience a new era of farming success with Field2Fork, the
        groundbreaking app that directly connects farmers with wholesalers and
        consumers, empowering you to showcase your quality produce and secure
        fair deals for a prosperous future.
      </p>
      <a
        href="#"
        className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Join
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

function MyProductList({ products, searchQuery, handleSearch }) {
  console.log(products);
  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = (prevQuantities[productId] || 0) - 1;
      const newQuantities = { ...prevQuantities };
      if (updatedQuantity > 0) {
        newQuantities[productId] = updatedQuantity;
      } else {
        delete newQuantities[productId];
      }
      return newQuantities;
    });
  };

  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div class="flex items-center justify-between pb-4">
        <div></div>
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            value={searchQuery}
            onChange={handleSearch}
            type="text"
            id="table-search"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Seller
            </th>
            <th scope="col" class="px-6 py-3">
              Seller Type
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Availability
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {JSON.parse(product.seller).company_name ||
                  JSON.parse(product.seller).farm_name}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.seller_type}
              </th>
              <td className="px-6 py-4">Ksh {product.price}</td>
              <td className="px-6 py-4">
                {product.availability ? (
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                )}
              </td>
              <td className="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <input
                      value={quantities[product.id] || ""}
                      type="number"
                      id="first_product"
                      class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    <span class="sr-only">Quantity button</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
