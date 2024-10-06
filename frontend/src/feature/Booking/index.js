import Auth from "../Auth";
import Header from "./Components/Header";
import TripDetails from "./Components/TripDetails";
import PassengerDetails from "./Components/PassengerDetails";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "./Components/Accordion";
import FareDetails from "./Components/FareDetails";
import { useEffect, useState } from "react";
import { setBookingInfo } from "./redux/slice";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import "./Styles/index.scss";
import { saveBooking } from "./redux/thunk";

const Booking = () => {
  const [totalAmount, setTotalAmount] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const booking = useSelector((state) => state.booking);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setAmount = (amount) => setTotalAmount(amount);

  const handleSubmition = (formData) => {
    dispatch(saveBooking(formData));
  };

  useEffect(() => {
    if (booking.service) {
      localStorage.setItem("booking", JSON.stringify(booking));
    } else if (localStorage.getItem("booking")) {
      const bookingInfo = JSON.parse(localStorage.getItem("booking"));
      dispatch(setBookingInfo(bookingInfo));
    } else {
      navigate("/");
    }
  }, []);

  if (!booking?.service) {
    return <Spin />;
  }

  return (
    <>
      {!isLoggedIn && <Auth />}
      <div className="booking-container">
        <Header
          sourceCity={booking.sourceCity}
          destCity={booking.destCity}
          travelTime={booking.service.startTime}
        />
        <div className="container">
          <div className="left-container">
            <Accordion title="Trip Details" open={false}>
              <TripDetails booking={booking} />
            </Accordion>

            <PassengerDetails
              seats={booking.seats}
              totalAmount={totalAmount}
              handleSubmition={handleSubmition}
            />
          </div>
          <div className="right-container">
            <FareDetails seats={booking.seats} setAmount={setAmount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
