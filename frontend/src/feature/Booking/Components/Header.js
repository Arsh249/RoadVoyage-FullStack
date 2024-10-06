import React from "react";
import { Bus, Location, VerticalLine } from "../../../components/icons2";
import { formatDate, formatTime } from "./constantfunc";
import "../Styles/Header.scss";

const Header = ({ sourceCity, destCity, travelTime }) => {
  return (
    <div className="header-container">
      <div>
        <Bus />
        <span>{sourceCity}</span>
        <span className="material-icons">arrow_forward</span>
        <Location />
        <span>{destCity}</span>
        <VerticalLine />
        <div>
          <span>{formatDate(travelTime)}</span>{" "}
          <span>{formatTime(travelTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
