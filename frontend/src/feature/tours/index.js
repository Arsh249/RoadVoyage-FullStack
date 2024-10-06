import Filters from "../filters";
import { useDispatch, useSelector } from "react-redux";
import { ToursList } from "./Components/ToursList";
import { Link, useParams } from "react-router-dom";
import { toursApiStatusSelector } from "./redux/selectors";
import { useEffect, useState } from "react";
import { fetchAllTours } from "./redux/thunk";
import { ApiStatus } from "../../network/constants";
import { Empty } from "antd";
import TourSearch from "../home/TourSearch";
import { clearAllFilters } from "../filters/redux/slice";
import "./Styles/index.scss";
import Loader from "../../components/Loader";

const Tours = () => {
  const { sourceCityId, destCityId, travelDate } = useParams();
  const apiStatus = useSelector(toursApiStatusSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTours(sourceCityId, destCityId, travelDate));

    return () => dispatch(clearAllFilters());
  }, []);

  if (apiStatus === ApiStatus.pending || apiStatus === ApiStatus.init) {
    return <Loader />;
  }

  return (
    <div>
      {/* <TourSearch /> */}
      <ToursWrapper />
    </div>
  );
};

const ToursWrapper = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const tours = useSelector((state) => state.tours?.tours?.data?.tours);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (tours?.length > 0) {
    return (
      <div className="root-tours-container">
        {screenWidth >= 850 && <Filters />}
        <ToursList />
      </div>
    );
  }

  return (
    <>
      <Empty
        description={
          <p>
            No buses found for your search <Link to="/">Search Again</Link>
          </p>
        }
        style={{ margin: "auto" }}
      />
    </>
  );
};

export default Tours;
