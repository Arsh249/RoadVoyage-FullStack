import { useSelector } from "react-redux";
import { filterKeys } from "../redux/slice";

const DepartureTimeInput = ({ updateDipartureTime, departureTime }) => {
  const isSelected = useSelector(
    (state) =>
      state.filters[filterKeys.DEPARTURE_TIME][departureTime.identifier]
  );
  return (
    <div className="box">
      <input
        type="checkbox"
        id={departureTime.identifier}
        className="select-box"
        checked={isSelected}
        onChange={(e) => {
          updateDipartureTime(e.target.checked, departureTime.identifier);
        }}
      />
      <label htmlFor={departureTime.identifier}>
        {departureTime.icon}
        <span>{departureTime.title}</span>
      </label>
    </div>
  );
};

export default DepartureTimeInput;
