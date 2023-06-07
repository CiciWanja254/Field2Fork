import React, { useState } from 'react';
// import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Testimonial from './components/Testimonial'
import Promo from './components/Promo'
import About from './components/About'
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;


function IndexPage() {
  return (
    <div>
      <Header />
      <Promo />
      <About />
      <Newsletter />
      <Testimonial />
      <Footer />
    </div>
  )
}

function AboutPage() {
  return (
    <h1 className="text-3xl font-bold underline">
      This is the about page
    </h1>
  )  
}

function BlogPage() {
  return (
    <h1 className="text-3xl font-bold underline">
      This is the blog page
    </h1>
  )
}