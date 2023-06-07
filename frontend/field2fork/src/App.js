import React, { useState } from 'react';
// import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';


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
    <h1 className="text-3xl font-bold underline">
      This is the index page
    </h1>
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