export default function WeatherTable({ weatherData, togglePin }) {
  return (
    <table className="table-auto w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="px-4 py-2">Provider</th>
          <th className="px-4 py-2">Temperature</th>
          <th className="px-4 py-2">Wind Speed</th>
          <th className="px-4 py-2">Humidity</th>
          <th className="px-4 py-2">Cloud Coverage</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((provider) => (
          <tr key={provider.name}>
            <td className="border px-4 py-2">{provider.name}</td>
            <td className="border px-4 py-2">{provider.temperature || 'N/A'}</td>
            <td className="border px-4 py-2">{provider.windSpeed || 'N/A'}</td>
            <td className="border px-4 py-2">{provider.humidity || 'N/A'}</td>
            <td className="border px-4 py-2">{provider.cloud || 'N/A'}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => togglePin(provider.name)}
                className={`px-4 py-2 rounded ${
                  provider.isPinned ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                }`}
              >
                {provider.isPinned ? 'Unpin' : 'Pin'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
