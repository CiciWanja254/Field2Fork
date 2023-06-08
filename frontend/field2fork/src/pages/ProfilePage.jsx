import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

function ProfilePage() {
  return (
    <div>
      <Header />
      <ProfileCard />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <MyProductList />
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

function MyProductList() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
      <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-4">
        Product List
      </h2>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Product</th>
            <th className="border border-gray-400 p-2">Price</th>
            <th className="border border-gray-400 p-2">Availability</th>
            <th className="border border-gray-400 p-2">Farm Location</th>
            <th className="border border-gray-400 p-2">Harvest Date</th>
            <th className="border border-gray-400 p-2">Shelf Life</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Organic Apples</td>
            <td className="border border-gray-400 p-2">$2.99/lb</td>
            <td className="border border-gray-400 p-2">In Stock</td>
            <td className="border border-gray-400 p-2">Farmville, USA</td>
            <td className="border border-gray-400 p-2">June 1, 2023</td>
            <td className="border border-gray-400 p-2">2 weeks</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Free-Range Eggs</td>
            <td className="border border-gray-400 p-2">$4.99/dozen</td>
            <td className="border border-gray-400 p-2">In Stock</td>
            <td className="border border-gray-400 p-2">Farmville, USA</td>
            <td className="border border-gray-400 p-2">June 3, 2023</td>
            <td className="border border-gray-400 p-2">1 month</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Raw Honey</td>
            <td className="border border-gray-400 p-2">$9.99/jar</td>
            <td className="border border-gray-400 p-2">In Stock</td>
            <td className="border border-gray-400 p-2">Farmville, USA</td>
            <td className="border border-gray-400 p-2">May 28, 2023</td>
            <td className="border border-gray-400 p-2">6 months</td>
          </tr>
        </tbody>
      </table>
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

function ReviewsSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mt-8 mb-8">
      <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-4">
        Reviews
      </h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="avatar1.jpg"
            alt="Avatar 1"
          />
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-gray-600 dark:text-gray-400">
              Excellent product! Highly recommended.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              June 1, 2023, 10:30 AM
            </p>
          </div>
        </li>
      </ul>
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
