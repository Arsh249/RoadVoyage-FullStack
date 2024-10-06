import { ContinueIcon } from "../../../components/icons2";

const SelectedSeatCard = ({
  boarding,
  dropping,
  selectedSeats,
  handleContinueClick,
}) => {
  const isPointsSelected =
    boarding?.stopId && dropping?.stopId && selectedSeats?.length > 0;

  const totalPrice =
    selectedSeats?.length > 0
      ? selectedSeats.reduce((sum, seat) => sum + seat.price, 0)
      : 0;

  return (
    <>
      <div>
        <p>
          Seats Selected :{" "}
          {selectedSeats.map((seat, index) => (
            <span key={seat.seatNumber}>
              {seat.seatNumber}
              {index !== selectedSeats.length - 1 && ","}
            </span>
          ))}
        </p>
        <p>
          Base Fare : <span>{totalPrice}</span>
        </p>
      </div>
      <button
        className={isPointsSelected ? "enabled" : "disabled"}
        disabled={!isPointsSelected}
        onClick={handleContinueClick}
      >
        Continue
        {isPointsSelected && <ContinueIcon />}
      </button>
    </>
  );
};

export default SelectedSeatCard;
