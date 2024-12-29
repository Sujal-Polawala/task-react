"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import WeatherList from "./WeatherList";
import LoadingSpinner from "./LoadingSpinner";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  // Fetch weather data
  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/dev/api/weather");
      const sortedData = response.data.sort((a, b) => b.isPinned - a.isPinned);
      setWeatherData(sortedData);
      setIsDataFetched(true); // Mark data as fetched
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Toggle pin/unpin status
  const togglePin = async (providerName) => {
    try {
      await axios.post("http://localhost:3001/dev/api/weather/togglePin", {
        providerName,
      });
      setWeatherData((prevData) => {
        const updatedData = prevData.map((provider) =>
          provider.name === providerName
            ? { ...provider, isPinned: !provider.isPinned }
            : provider
        );
        // Sort updated data by isPinned status
        return updatedData.sort((a, b) => b.isPinned - a.isPinned);
      });
    } catch (error) {
      console.error("Error toggling pin:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      <Header title="Weather Dashboard" />
      <div className="flex justify-center mb-4">
        {!isDataFetched && (
          <button
            onClick={fetchWeatherData}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          >
            Fetch Weather Data
          </button>
        )}
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : isDataFetched ? (
        <WeatherList weatherData={weatherData} togglePin={togglePin} />
      ) : (
        <p className="text-center text-gray-700">Click the button to fetch weather data.</p>
      )}
    </div>
  );
};

export default WeatherDashboard;
