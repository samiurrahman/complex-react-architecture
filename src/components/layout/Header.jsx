import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="p-4 bg-gray-100 flex justify-between">
    <h1 className="text-xl font-bold">MyApp</h1>
    <nav>
      <Link to="/dashboard" className="mr-4">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
);

export default Header;
