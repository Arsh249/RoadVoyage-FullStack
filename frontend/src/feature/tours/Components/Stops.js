import React, { useState, useMemo } from "react";
import Points from "./Points";
import SelectedPointCard from "./SelectedPointCard";
import "../Styles/Stops.scss";

const Stops = ({ pointName, points, selectedStop, handleChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStops = useMemo(() => {
    return points.filter((stop) =>
      stop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [points, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return !selectedStop.stopId ? (
    <div className="stops_container">
      <div>
        <div className="search_bar">
          <span className="material-icons">search</span>
          <input
            type="text"
            onChange={handleSearch}
            placeholder={`Search ${pointName} Point`}
          />
        </div>
      </div>
      <div className="point-list">
        {filteredStops.map((stop) => (
          <Points key={stop.stopId} stop={stop} handleChange={handleChange} />
        ))}
      </div>
    </div>
  ) : (
    <SelectedPointCard
      pointName={pointName}
      pointDetails={selectedStop}
      handleChange={handleChange}
    />
  );
};

export default Stops;
