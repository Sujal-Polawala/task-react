import React from "react";

const Header = ({ title }) => (
  <header className="text-center mb-6">
    <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
    <p className="text-gray-600 mt-2">
      Compare weather data across multiple providers.
    </p>
  </header>
);

export default Header;
 