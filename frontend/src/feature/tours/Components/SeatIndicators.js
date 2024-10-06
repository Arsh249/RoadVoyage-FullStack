import React from "react";
import "../Styles/SeatIndicators.scss";
import { SquareIcon } from "../../../components/icons2";

const SeatIndicators = ({ availableSeats }) => {
  return (
    <div className="seat_details">
      <div>
        <h4>{availableSeats} Seats Available</h4>
        <p className="light_color">Click on seat to select/deselect</p>
      </div>
      <div>
        <div className="seat_indicator">
          <SquareIcon fill="white" stroke="#BABABA" />
          <span>Available</span>
          <span>Seats</span>
        </div>
        <div className="seat_indicator">
          <SquareIcon fill="#DEDEDE" stroke="#FE98CC" />
          <span>Booked</span>
          <span>By Female</span>
        </div>
        <div className="seat_indicator">
          <SquareIcon fill="#DEDEDE" stroke="#BBBBBB" />
          <span>Booked</span>
          <span>Seats</span>
        </div>
        <div className="seat_indicator">
          <SquareIcon fill="#DEDEDE" stroke="#52B2FF" />
          <span>Booked</span>
          <span>By Male</span>
        </div>
        <div className="seat_indicator">
          <SquareIcon fill="#D8F2E2" stroke="#3DC070" />
          <span>Selected</span>
          <span>Seats</span>
        </div>
      </div>
    </div>
  );
};

export default SeatIndicators;
