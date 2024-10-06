import { useDispatch } from "react-redux";
import { AfterNoon, Evening, Morining, Night } from "../../../components/Icons";
import { departureTimeKeys, filterKeys, updateStop } from "../redux/slice";
import DepartureTimeInput from "./DepartureTimeInput";

const departureTimes = [
  {
    title: "Before 10AM",
    identifier: departureTimeKeys.MORNING,
    icon: <Morining />,
  },
  {
    title: "10AM - 5PM",
    identifier: departureTimeKeys.AFTERNOON,
    icon: <AfterNoon />,
  },
  {
    title: "5PM - 11PM",
    identifier: departureTimeKeys.EVENING,
    icon: <Evening />,
  },
  {
    title: "After 11PM",
    identifier: departureTimeKeys.NIGHT,
    icon: <Night />,
  },
];

export const DepartureTimeSelector = () => {
  const dispatch = useDispatch();
  const updateDipartureTime = (add, value) => {
    dispatch(
      updateStop({
        add,
        stopId: value,
        identifier: filterKeys.DEPARTURE_TIME,
      })
    );
  };

  return (
    <div className="section">
      <span className="title">Departure Time</span>
      <div className="boxes">
        {departureTimes.map((departureTime) => (
          <DepartureTimeInput
            key={departureTime.identifier}
            updateDipartureTime={updateDipartureTime}
            departureTime={departureTime}
          />
        ))}
      </div>
    </div>
  );
};
