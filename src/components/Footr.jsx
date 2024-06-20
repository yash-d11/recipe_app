import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footr = () => {
  return (
    <footer className="bg-green-300 w-full text-white py-8" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl text-gray-900 font-bold">Recipe Realm</h2>
            <p className="mt-2 text-gray-900">Providing quality service since 2023</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-900 hover:text-white transition duration-150 ease-in-out"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-white transition duration-150 ease-in-out"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-white transition duration-150 ease-in-out"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-white transition duration-150 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900 pt-4 text-center">
          <p className="text-gray-900">&copy; 2024 Recipe Realm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footr;
