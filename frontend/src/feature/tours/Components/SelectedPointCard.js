import { formatTime } from "./constantfuncs";
import "../Styles/SelectedPointCard.scss";

const SelectedPointCard = ({ pointName, pointDetails, handleChange }) => {
  return (
    <div className="selected-point">
      <div>
        <p>{pointName} Point</p>
        <p className="point-name">{pointDetails.name}</p>
        <p className="point-direction">
          <span>{formatTime(pointDetails.arrivalTime)} </span>
          {pointDetails.directions}
        </p>
      </div>
      <div>
        <button onClick={() => handleChange()} className="change-point">
          Change
        </button>
      </div>
    </div>
  );
};

export default SelectedPointCard;
