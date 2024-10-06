import { useDispatch, useSelector } from "react-redux";
import {
  stopPointsSelector,
  useBoarding,
  useDropping,
  useSelectedSeats,
} from "../redux/selectors";
import SelectedSeatCard from "./SelectedSeatCard";
import Stops from "./Stops";
import { toggleBoardingPoint, toggleDroppingPoint } from "../redux/slice";

const StopSelection = ({ tourId, handleContinueClick }) => {
  const dispatch = useDispatch();

  const { boardingPoints, droppingPoints } = useSelector((state) =>
    stopPointsSelector(state, tourId)
  );
  const boarding = useBoarding(tourId);
  const dropping = useDropping(tourId);
  const selectedSeats = useSelectedSeats(tourId);

  const handleBoardingPoint = (stop) => {
    dispatch(toggleBoardingPoint({ tourId, stop }));
  };
  const handleDroppingPoint = (stop) => {
    dispatch(toggleDroppingPoint({ tourId, stop }));
  };

  return (
    <div className="stops">
      <Stops
        pointName={"Boarding"}
        points={boardingPoints}
        selectedStop={boarding}
        handleChange={handleBoardingPoint}
      />
      {boarding.stopId && (
        <Stops
          pointName={"Dropping"}
          points={droppingPoints}
          selectedStop={dropping}
          handleChange={handleDroppingPoint}
        />
      )}
      <div className="continue_booking">
        <SelectedSeatCard
          boarding={boarding}
          dropping={dropping}
          selectedSeats={selectedSeats}
          handleContinueClick={handleContinueClick}
        />
      </div>
    </div>
  );
};

export default StopSelection;
