import { useSelector } from "react-redux";
import { filterKeys } from "../redux/slice";

const BusTypeInput = ({ busType, updateBusTypeFilter }) => {
  const isChecked = useSelector(
    (state) => state.filters[filterKeys.BUS_TYPE][busType.identifier]
  );
  return (
    <div className="box" >
      <input
        type="checkbox"
        id={busType.identifier}
        className="select-box"
        checked={isChecked}
        onChange={(e) => {
          updateBusTypeFilter(e.target.checked, busType.identifier);
        }}
      />
      <label htmlFor={busType.identifier}>
        {busType.icon}
        <span>{busType.title}</span>
      </label>
    </div>
  );
};

export default BusTypeInput;
