import React from "react";

const WeatherItem = ({ provider, togglePin }) => (
  <li className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
    <h2 className="text-xl font-bold text-gray-700">{provider.name}</h2>
    <p className="text-gray-600">
      Temperature: {provider.temperature || "N/A"}°C
    </p>
    <p className="text-gray-600">Wind Speed: {provider.windSpeed || "N/A"} km/h</p>
    <p className="text-gray-600">Humidity: {provider.humidity || "N/A"}%</p>
    <button
      onClick={() => togglePin(provider.name)}
      className={`mt-4 px-4 py-2 rounded-lg ${
        provider.isPinned
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {provider.isPinned ? "Unpin" : "Pin"}
    </button>
  </li>
);

export default WeatherItem;
