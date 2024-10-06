import { useDispatch, useSelector } from "react-redux";
import Tour from "./Tour";
import { Link, useParams } from "react-router-dom";
import { filteredToursSelector } from "../redux/selectors";
import { Button, Empty } from "antd";
import { clearAllFilters } from "../../filters/redux/slice";

export const ToursList = () => {
  const { sourceCity, destCity } = useParams();
  const tours = useSelector(filteredToursSelector);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAllFilters());
  };
  return (
    <div className="tours_container">
      {tours.length > 0 ? (
        tours.map((tour) => (
          <Tour
            key={tour.tourId}
            tour={tour}
            sourceCity={sourceCity}
            destinationCity={destCity}
          />
        ))
      ) : (
        <Empty
          description={
            <p>
              No buses found for the selected filters{" "}
              <Button onClick={handleClick}>Clear Filters</Button>
            </p>
          }
          style={{ margin: "auto" }}
        />
      )}
    </div>
  );
};
