import "./Climate_API.css";
import React, { useState, useEffect } from "react";
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Climate_API() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries", error));
  }, []);

  const search = () => {
    if (selectedCountry) {
      fetch(
        `${api.base}weather?q=${selectedCountry}&units=metric&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  const handleSearch = (filteredCountry) => {
    setSelectedCountry(filteredCountry);
    search(); // ทำการค้นหาทันที
  };

  const handleDelete = () => {
    if (selectedCountry) {
      setQuery("");
      setSelectedCountry(null);
      setWeather({});
    }
  };

  return (
    <div
      className={`App ${
        typeof weather.main !== "undefined"
          ? weather.main.temp > 18
            ? "hot"
            : "cold"
          : ""
      }`}
    >
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              } else if (e.key === "Backspace" && query === selectedCountry) {
                setSelectedCountry(null);
              }
            }}
          />
        </div>
        {query.length > 0 && (
          <div className="autocomplete-list">
            {countries
              .filter((country) =>
                country.toLowerCase().includes(query.toLowerCase())
              )
              .map((filteredCountry, index) => (
                <div
                  key={index}
                  className="autocomplete-item"
                  onClick={() => {
                    setQuery(filteredCountry);
                    handleSearch(filteredCountry);
                    search();
                  }}
                >
                  {filteredCountry}
                </div>
              ))}
          </div>
        )}
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Climate_API;
