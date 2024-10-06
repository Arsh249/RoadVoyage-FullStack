import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const RoadVoyageApp = () => {
  return (
    <div className="root-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RoadVoyageApp;
