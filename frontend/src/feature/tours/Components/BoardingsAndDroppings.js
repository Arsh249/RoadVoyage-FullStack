import { Dropdown, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import "../Styles/dropdown.scss";
import { formatTime } from "./constantfuncs";

const getBoardingsAndDropping = (boardingPoints, droppingPoints) => {
  return (
    <div className="boarding-dropping-container">
      <div className="stops-container">
        <div>
          <h4>Boarding Point</h4>
        </div>
        <div className="list-container">
          {boardingPoints.map((stop) => (
            <div key={stop.stopId} className="point">
              <p className="point-name">{stop.name}</p>
              <p className="point-direction">
                {formatTime(stop.arrivalTime)} {stop.directions}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="stops-container">
        <div>
          <h4>Dropping point</h4>
        </div>
        <div className="list-container">
          {droppingPoints.map((stop) => (
            <div key={stop.stopId} className="point">
              <p className="point-name">{stop.name}</p>
              <p className="point-direction">
                {formatTime(stop.arrivalTime)} {stop.directions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BoardingsAndDroppings = ({ boardingPoints, droppingPoints }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // Clean up on unmount
    };
  }, [isOpen]);

  const BoardingsAndDroppings = [
    {
      label: getBoardingsAndDropping(boardingPoints, droppingPoints),
      key: "0",
    },
  ];

  return (
    <div>
      <Dropdown
        menu={{
          items: BoardingsAndDroppings,
        }}
        trigger={["click"]}
      >
        <a
          style={{ color: isOpen ? "#ce6683" : "#8a99a5" }}
          onClick={() => setIsOpen(!isOpen)}
          ref={dropdownRef}
        >
          <Space>Boarding & Dropping Points</Space>
          <span className="material-icons">
            {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </a>
      </Dropdown>
    </div>
  );
};

export default BoardingsAndDroppings;
