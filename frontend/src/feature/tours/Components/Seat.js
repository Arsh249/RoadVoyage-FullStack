import React, { useState } from "react";
import { Tooltip } from "antd";
import MyToolTip from "./MyTooltip";
import { SeatIcon } from "../../../components/icons2";

const Seat = ({ seat, onSelectSeat, selectedPrice }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    onSelectSeat(seat);
    setSelected(!selected);
  };

  const setFillColor = () => {
    return selected ? "#D8F2E2" : seat.gender ? "#DEDEDE" : "#FFFFFF";
  };

  const setStrokeColor = () => {
    return selected
      ? "#3DC070"
      : selectedPrice === seat.price
      ? "#3AB56A"
      : "#C6C6C6";
  };

  return (
    <Tooltip
      title={<MyToolTip seat={seat}/>}
      color="#ffffff"
      overlayClassName="custom-tooltip"
      overlayInnerStyle={{
        color: "black",
        display: "flex",
      }}
    >
      <button className="seat" onClick={handleSelect} disabled={!!seat.gender}>
        <SeatIcon
          seatType={seat.seatType}
          fill={setFillColor()}
          stroke={setStrokeColor()}
          filter={selectedPrice === seat.price}
          selected={selected}
          gender={seat.gender}
        />
        <span className="seat_number">{seat.seatNumber}</span>
      </button>
    </Tooltip>
  );
};


export default Seat;
