import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="text-lg font-bold">MyApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline hover:text-blue-500">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline hover:text-blue-500">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

