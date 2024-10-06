import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  updateSourceCity,
  updateDestCity,
  updateSelectedDate,
} from "./redux/slice";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import CitiesList from "./CitiesList";
import { useNavigate } from "react-router-dom";
import "../../styles/toursearch.scss";

const searchCities = (state, searchValue, excludedCity) => {
  return state.search.cities.filter(
    (city) =>
      city.city.toLowerCase().includes(searchValue.toLowerCase()) &&
      city.city !== excludedCity
  );
};

const TourSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [color, setColor] = useState("#000");
  const [focusedInput, setFocusedInput] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    sourceCity,
    destCity,
    date: selectedDate,
  } = useSelector((state) => state.search.selection);

  const getCities = useSelector((state) =>
    searchCities(
      state,
      searchValue,
      focusedInput === "from"
        ? destCity
          ? destCity.city
          : ""
        : sourceCity
        ? sourceCity.city
        : ""
    )
  );

  const handleCitySelect = (city) => {
    if (focusedInput === "from") {
      dispatch(updateSourceCity(city));
    } else if (focusedInput === "to") {
      dispatch(updateDestCity(city));
    }
    setSearchValue("");
    setShowSuggestions(false); // Close the popup after selecting the city
  };

  const handleInputClick = (inputType) => {
    setFocusedInput(inputType);
    setShowSuggestions(true);
  };

  const handleCitySwap = () => {
    dispatch(updateSourceCity(destCity));
    dispatch(updateDestCity(sourceCity));
  };

  const setSelectedDate = (date) => {
    dispatch(updateSelectedDate(date));
  };

  const handleInputChange = (e, inputType) => {
    const value = e.target.value;
    setSearchValue(value);
    if (inputType === "from" && value === "") {
      dispatch(updateSourceCity(null));
    } else if (inputType === "to" && value === "") {
      dispatch(updateDestCity(null));
    }
    setShowSuggestions(true); // Show suggestions on input change
  };

  const handleKeyDown = (e, inputType) => {
    if (e.key === "Backspace" && !searchValue) {
      if (inputType === "from") {
        dispatch(updateSourceCity(null));
      } else if (inputType === "to") {
        dispatch(updateDestCity(null));
      }
    }
  };

  const handleColorChange = () => {
    setColor((prevColor) => (prevColor === "#000" ? "#DC635B" : "#000"));
  };

  const handleTodayClick = () => {
    setSelectedDate(dayjs());
  };

  const handleTomorrowClick = () => {
    setSelectedDate(dayjs().add(1, "days"));
  };

  const handleNavigation = () => {
    if (sourceCity && destCity && selectedDate) {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      const sourceId = sourceCity.cityId;
      const destId = destCity.cityId;
      const url = `/bus_search/${sourceCity.city}/${sourceId}/${destCity.city}/${destId}/${formattedDate}`;
      navigate(url);
    } else {
      alert("Please select source city, destination city, and date.");
    }
  };

  // Disabling the dates before today
  const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
  };

  useEffect(() => {
    const onDocumentClick = () => setShowSuggestions(false);
    document.addEventListener("click", onDocumentClick);

    return () => document.removeEventListener("click", onDocumentClick);
  }, [dispatch]);

  return (
    <section className="tour-header" onClick={(e) => e.stopPropagation()}>
      <section className="main-section">
        <div className="tour-heading">
          <h1>Book Bus Tickets</h1>
        </div>
        <div className="tour-search">
          <div className="location-search">
            <span className="material-icons" style={{ color: color }}>
              directions_bus
            </span>
            <input
              value={
                sourceCity
                  ? sourceCity.city
                  : focusedInput === "from"
                  ? searchValue
                  : ""
              }
              onFocus={() => handleInputClick("from")}
              onChange={(e) => handleInputChange(e, "from")}
              onKeyDown={(e) => handleKeyDown(e, "from")}
              onClick={handleColorChange}
              className={`station-input ${
                focusedInput === "from" ? "focused" : ""
              }`}
              placeholder="From Station"
            />
            {showSuggestions && focusedInput === "from" && (
              <CitiesList
                className="cities-list"
                getCities={getCities}
                focusedInput={focusedInput}
                setSearchValue={setSearchValue}
                handleCitySelect={handleCitySelect}
              />
            )}
          </div>

          <span
            className="material-icons"
            style={{ cursor: "pointer" }}
            onClick={handleCitySwap}
          >
            compare_arrows
          </span>

          <div className="location-search">
            <span className="material-icons" style={{ color: color }}>
              location_on
            </span>
            <input
              value={
                destCity
                  ? destCity.city
                  : focusedInput === "to"
                  ? searchValue
                  : ""
              }
              onFocus={() => handleInputClick("to")}
              onChange={(e) => handleInputChange(e, "to")}
              onKeyDown={(e) => handleKeyDown(e, "to")}
              onClick={handleColorChange}
              className={`station-input ${
                focusedInput === "to" ? "focused" : ""
              }`}
              placeholder="To Station"
            />
            {showSuggestions && focusedInput === "to" && (
              <CitiesList
                className="cities-list"
                getCities={getCities}
                focusedInput={focusedInput}
                setSearchValue={setSearchValue}
                handleCitySelect={handleCitySelect}
              />
            )}
          </div>

          <div className="date-picker">
            <DatePicker
              className="date-icon"
              value={selectedDate}
              disabledDate={disabledDate}
              onChange={(date) => setSelectedDate(date)}
              format="DD-MM-YYYY"
            />
            <span className="text-color" onClick={handleTodayClick}>
              Today
            </span>
            <span className="text-color" onClick={handleTomorrowClick}>
              Tomorrow
            </span>
          </div>
          <button className="search-button" onClick={handleNavigation}>
            Search
          </button>
        </div>
      </section>
    </section>
  );
};

export default TourSearch;
