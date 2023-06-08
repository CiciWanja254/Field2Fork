import React, { useState } from "react";

function CategoryCard({ image, name }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-md mb-2">
        <img
          src={image}
          alt="Front of men's Basic Tee in black."
          className="object-cover object-center h-full w-full square"
        />
      </div>
      <div className="px-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default CategoryCard;
