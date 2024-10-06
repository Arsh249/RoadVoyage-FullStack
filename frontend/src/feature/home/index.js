import { useEffect } from "react";
import TourSearch from "./TourSearch";
import { fetchCities } from "./redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import Loader from "../../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const apiStatus = useSelector((state) => state.search.apiStatus);

  const onLoadPage = () => {
    dispatch(fetchCities);
  };

  useEffect(() => {
    onLoadPage();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Loader />;
  }

  if (apiStatus === "error")
    return <Button onClick={onLoadPage}>Reload Page</Button>;

  return (
    <>
      <TourSearch />
    </>
  );
};

export default Home;
