import React, { useEffect, useState } from "react";
import "../Styles/FareDetails.scss";

const Charges = {
  GST: 0.05,
  cancellation: 0.0902,
};

const FareDetails = ({ seats, setAmount }) => {
  const [show, setShow] = useState(false);

  const baseFare = seats.reduce((sum, seat) => sum + seat.price, 0).toFixed(2);
  const busPartnerGST = (baseFare * Charges.GST).toFixed(2);
  const totalFare = (parseFloat(baseFare) + parseFloat(busPartnerGST)).toFixed(
    2
  );
  const freeCancellationCharge = (baseFare * Charges.cancellation).toFixed(2);
  const totalAmount = (
    parseFloat(baseFare) +
    parseFloat(busPartnerGST) +
    parseFloat(freeCancellationCharge)
  ).toFixed(2);

  useEffect(() => {
    setAmount(totalAmount);
  }, []);

  return (
    <div className="accordion">
      <button onClick={() => setShow(!show)}>
        <div>
          <h2 className="title">FareDetails</h2>
        </div>
        <div className="bottom">
          <p className="gray-text">Total Fare (Inclusive)</p>
          <div>
            <p className="gray-text">
              <span className="material-icons rupee">currency_rupee</span>
              {totalFare}
            </p>
            <span className="material-icons">
              {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </div>
        </div>
      </button>
      {show && (
        <div className="gray-text fare-details">
          <div>
            <p>Base Fare</p>
            <p>
              +<span className="material-icons rupee">currency_rupee</span>
              <span>{baseFare}</span>
            </p>
          </div>
          <div>
            <p>Bus Partner GST</p>
            <p>
              +<span className="material-icons rupee">currency_rupee</span>
              <span>{busPartnerGST}</span>
            </p>
          </div>
        </div>
      )}
      <div>
        <div className="gray-text upper">
          <p>Free Cancellation Charge</p>
          <p>
            <span className="material-icons rupee">currency_rupee</span>
            <span>{freeCancellationCharge}</span>
          </p>
        </div>
        <div className="horizontal-line"></div>
        <div className="lower">
          <p>Total Amount To Be Paid</p>
          <p>
            <span className="material-icons">currency_rupee</span>
            <span>{totalAmount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FareDetails;
