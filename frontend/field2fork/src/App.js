import React, { Fragment, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Pages
import ProfilePage from "./pages/ProfilePage";
import IndexPage from "./pages/IndexPage";
import ProductPage from "./pages/ProductPage";

// 
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  }
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;