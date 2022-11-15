import React from "react";

const Header = () => {
  return(
  <nav className>
    <div className="container justify-center p-6 mx-auto text-gray-500">
      <a href="#" className="text-gray-700 transition-colors duration-700  border-b-2 border-gray-100 mx-1.5 sm:mx-6">home</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-700 transition-colors duration-700  hover:border-gray-100 mx-1.5 sm:mx-6">gallery</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-700 transition-colors duration-700  hover:border-gray-100 mx-1.5 sm:mx-6">product</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-700 transition-colors duration-700  hover:border-gray-100 mx-1.5 sm:mx-6">about</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-700 transition-colors duration-700  hover:border-gray-100 mx-1.5 sm:mx-6">blog</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-700 transition-colors duration-700  hover:border-gray-100 mx-1.5 sm:mx-6">
      </a>
    </div>
  </nav>
)
}

export default Header