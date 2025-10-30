import React from "react";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({ variant = "primary", children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition ${variants[variant]}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;