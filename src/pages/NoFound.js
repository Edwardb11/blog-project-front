import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="px-40 py-20  bg-white rounded-md shadow-xl">
      <div className="flex flex-col items-center">
        <div>
          <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
        </div>
        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          <span className="text-red-500">Oops!</span> Page not found
        </h6>

        <p className="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 hover:bg-green-600 hover:text-white"
        >
          Go home
        </Link>
      </div>
      
    </div>
  );
};

export default NotFound;
