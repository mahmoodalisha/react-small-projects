import React, { useState } from 'react';

const countryCityData = {
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Canada: ['Toronto', 'Vancouver', 'Montreal'],
  India: ['Delhi', 'Mumbai', 'Bangalore']
};

const CountryCitySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities(countryCityData[country] || []);
  };

  return (
    <div>
      <h1>Country and City Selector</h1>
      <div>
        <label>Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {Object.keys(countryCityData).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div> 
        <label>City: </label> 
        <select disabled={!selectedCountry}> 
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryCitySelector;
//for !selectedCountry element for cities will be disabled initially because no country has been selected yet.
//<option> Element: The <option> element represents an item in a dropdown list (created by a <select> element).