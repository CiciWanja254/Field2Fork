import React, { useState } from "react";

function ProductCard({ imageUrl, name, price }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-md mb-2">
        <img
          src={imageUrl}
          alt="Front of men's Basic Tee in black."
          className="object-cover object-center h-full w-full square"
        />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </h5>
        </a>
        <div className="flex justify-center items-center mt-2.5 mb-5">
          <span className="text-3lg font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
        <ExampleComponent />
      </div>
    </div>
  );
}

export default ProductCard;

function ExampleComponent() {
  const [quantity, setQuantity] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    setShowButtons(true);
  };

  return (
    <div className="flex items-center justify-center">
      {quantity === 0 ? (
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span className="mx-4 text-2xl font-bold">{quantity}</span>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={incrementQuantity}
          >
            +
          </button>
        </>
      )}
    </div>
  );
}
