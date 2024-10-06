import React, { useEffect } from "react";
import { Button, Form } from "antd";
import Accordion from "./Accordion";
import { ContinueIcon } from "../../../components/icons2";
import PassengerInput from "./PassengerInput";
import "../Styles/PassengerDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { ApiStatus } from "../../../network/constants";
import { resetBooking, updateBookingStatus } from "../redux/slice";
import { useNavigate } from "react-router-dom";

const PassengerDetails = ({ seats, totalAmount, handleSubmition }) => {
  const status = useSelector((state) => state.booking.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === ApiStatus.success) {
      dispatch(updateBookingStatus(ApiStatus.init));
      dispatch(resetBooking());
      navigate("/");
    }
  }, [status]);

  return (
    <Form className="passenger-form" onFinish={handleSubmition}>
      <Accordion title="Passenger Details">
        <div className="passengers-details">
          {seats.map((seat) => (
            <PassengerInput key={seat.seatNumber} seat={seat} />
          ))}
        </div>
      </Accordion>
      <Button
        htmlType="submit"
        className="continue-btn"
        loading={status === ApiStatus.pending}
      >
        Continue to Pay
        <span className="material-icons">currency_rupee</span>
        <span>{totalAmount}</span>
        <ContinueIcon />
      </Button>
    </Form>
  );
};

export default PassengerDetails;
