import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-lg">
      <h1 className="text-xl font-bold">CarbonTrack</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Tasks</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-3 py-1 rounded-md"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;