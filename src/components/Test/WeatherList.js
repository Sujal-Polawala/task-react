import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ weatherData, togglePin }) => {
  if (weatherData.length === 0) {
    return <p className="text-center text-gray-600">No data available</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weatherData.map((provider) => (
        <WeatherItem
          key={provider.name}
          provider={provider}
          togglePin={togglePin}
        />
      ))}
    </ul>
  );
};

export default WeatherList;
