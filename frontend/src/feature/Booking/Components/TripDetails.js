import React from "react";
import { formatDate, formatTime } from "./constantfunc";
import { CircleIcon } from "../../../components/icons2";
import "../Styles/TripDetails.scss";

const getPointName = (pointName) => {
  return pointName.length <= 11 ? pointName : `${pointName.slice(0, 11)}...`;
};
const TripDetails = ({ booking }) => {
  const { service, boarding, dropping, seats } = booking;
  return (
    <div className="trip-details">
      <div className="upper-section">
        <div>
          <p className="gray-text">Bus Partner</p>
          <h4>{service.busPartner}</h4>
        </div>
        <div>
          <p className="gray-text">Seat No</p>
          <h4>
            {seats.map((seat, index) => (
              <span key={seat.seatNumber}>
                {seat.seatNumber}
                {index !== seats.length - 1 && ","}
              </span>
            ))}
          </h4>
        </div>
      </div>
      <div className="middle-section">
        <p className="gray-text">Bus Type</p>
        <h4>{service.busType}</h4>
      </div>
      <div className="dashed-line"> </div>
      <div className="lower-section">
        <div>
          <h4>Boarding</h4>
          <p className="date-time">
            {formatDate(boarding.arrivalTime)},{" "}
            <span>{formatTime(boarding.arrivalTime)}</span>
          </p>
          <p className="gray-text">{getPointName(boarding.name)}</p>
        </div>
        <div className="duration">
          <CircleIcon />
          <span className="dashed-line"></span>
          <div className="duration_time">{service.duration}</div>
          <span className="dashed-line"></span>
          <CircleIcon />
        </div>
        <div>
          <h4>Dropping</h4>
          <p className="date-time">
            {formatDate(dropping.arrivalTime)},{" "}
            <span>{formatTime(dropping.arrivalTime)}</span>
          </p>
          <p className="gray-text">{getPointName(dropping.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
