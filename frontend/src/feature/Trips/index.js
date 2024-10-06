import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "./redux/thunk";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { BookingIcon, ProfileIcon } from "../../components/icons2";
import Bookings from "./Components/Bookings";
import Profile from "./Components/Profile";
import Auth from "../Auth";
import "./Styles/index.scss";

const Trips = () => {
  const [selectedTab, setSelectedTab] = useState("bookings");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrips());
  }, []);
  return (
    <>
      {!isLoggedIn && <Auth />}
      <div className="trips-container">
        <div className="my-bookings">
          <Breadcrumb
            className="breadcrumb"
            items={[
              {
                title: <Link to="/">Home</Link>,
              },
              {
                title: <Link to="/trips">My Account</Link>,
              },
              {
                title: (
                  <p>{selectedTab === "bookings" ? "Trips" : "Profile"}</p>
                ),
              },
            ]}
          />
          <div className="main-container">
            <div className="tabs-container">
              <div
                className={selectedTab === "bookings" ? "selected-tab" : ""}
                onClick={() => setSelectedTab("bookings")}
              >
                <BookingIcon selectedTab={selectedTab} />
                <span>My Bookings</span>
              </div>
              <div
                className={selectedTab === "profile" ? "selected-tab" : ""}
                onClick={() => setSelectedTab("profile")}
              >
                <ProfileIcon selectedTab={selectedTab} />
                <span>Profile</span>
              </div>
            </div>
            <div className="tabs-content">
              {selectedTab === "bookings" ? <Bookings /> : <Profile />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trips;
