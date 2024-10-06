import "../Styles/MyTooltip.scss";
const MyToolTip = ({ seat }) => {
  return (
    <div className="my-tooltip">
      <div>
        <span className="material-icons">currency_rupee</span>
        {seat.price}
      </div>
      <div>
        <span className="vertical-line">|</span>
        {seat.seatNumber}
      </div>
    </div>
  );
};

export default MyToolTip;
