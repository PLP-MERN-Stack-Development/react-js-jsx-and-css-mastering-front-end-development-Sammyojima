import React from "react";

const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mb-4">
    {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
    {children}
  </div>
);

export default Card;