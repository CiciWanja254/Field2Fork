import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="https://i.pinimg.com/564x/0f/51/91/0f5191ad56e4dd2f7406314e8bf28c9c.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Field2Fork</span>
                    </a>
                    <div className="flex items-center">
                        <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Sign-up</a>
                        <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
            <nav className="sticky top-0 bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-center">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                            <Link className="text-gray-900 dark:text-white hover:underline" to={`/`}>Home</Link>
                            </li>
                            <li>
                                <Link className="text-gray-900 dark:text-white hover:underline" to={`/products`}>Products</Link>
                            </li>
                            <li>
                                <Link className="text-gray-900 dark:text-white hover:underline" to={`/profile`}>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header