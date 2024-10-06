import React from "react";
import "../../styles/toursearch.scss";

const CitiesList = ({ handleCitySelect, getCities, focusedInput }) => {
  return (
    <div className={`cities ${focusedInput}`}>
      {getCities.map((city) => (
        <div
          key={city.cityId}
          className="city"
          onClick={() => handleCitySelect(city)}
        >
          <div className="cities-selection">
            <span class="material-icons">fort</span>
            <div className="cities-states">
              <span className="text-dark">{city.city}</span>
              <span className="text-light">{city.state}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitiesList;
