import { Checkbox } from "antd";
import { formatTime } from "./constantfuncs";

const Points = ({ stop, handleChange }) => {
  const uniqueId = new Date().getTime();
  return (
    <div className="point">
      <div className="check">
        <Checkbox onChange={() => handleChange(stop)} id={uniqueId} />
        <label htmlFor={uniqueId}>
          <div>
            <p className="point-name">{stop.name}</p>
            <p className="point-direction">{stop.directions}</p>
          </div>
        </label>
      </div>
      <div className="time">
        <p>{formatTime(stop.arrivalTime)}</p>
      </div>
    </div>
  );
};

export default Points;
