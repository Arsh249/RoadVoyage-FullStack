import { Dropdown, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import "../Styles/amenities.scss";

const getAmenities = (amenities) => {
  return (
    <div className="amenities-container">
      <div>
        <h4>Amenities</h4>
      </div>
      <div className="amenities-list">
        {amenities.map((amenity) => (
          <div key={amenity.icon}>
            <span className="material-icons">{amenity.icon}</span>
            <p>{amenity.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const Amenities = ({ amenities }) => {
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
  const Amenities = [
    {
      label: getAmenities(amenities),
      key: "0",
    },
  ];
  return (
    <Dropdown
      menu={{
        items: Amenities,
      }}
      trigger={["click"]}
    >
      <a
        style={{ color: isOpen ? "#ce6683" : "#8a99a5" }}
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
      >
        <Space>Amenities</Space>
        <span className="material-icons">
          {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </a>
    </Dropdown>
  );
};

export default Amenities;
