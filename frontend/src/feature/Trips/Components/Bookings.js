import { Tabs } from "antd";
import { useSelector } from "react-redux";
import "../Styles/Bookings.scss";

const ShowBookings = ({ bookingsArray }) => {
  console.log(bookingsArray);

  return (
    <div className="bookings">
      {bookingsArray.length > 0 ? (
        bookingsArray.map((booking) => (
          <div key={booking._id} className="booking">
            <h3>Tour ID : {booking.tourId}</h3>
            <h4>Passenger Details</h4>
            <table className="passenger-details">
              <thead>
                <tr className="passenger">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Seat Number</th>
                  <th>Paid Price</th>
                </tr>
              </thead>
              <tbody>
                {booking.bookedSeats.map((seat) => (
                  <tr key={seat.seatNumber} className="passenger">
                    <td>{seat.name}</td>
                    <td>{seat.age}</td>
                    <td>{seat.gender}</td>
                    <td>{seat.seatNumber}</td>
                    <td>
                      <span className="material-icons">currency_rupee</span>
                      {seat.paidPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p className="no-bookings">No Bookings Found</p>
      )}
    </div>
  );
};
const Bookings = () => {
  const bookingsArray = useSelector((state) => state.trips.bookings);

  const items = [
    {
      key: "1",
      label: "Upcoming",
      children: (
        <ShowBookings
          bookingsArray={bookingsArray.filter(
            (booking) => booking.bookingTime < new Date().getTime()
          )}
        />
      ),
    },
    {
      key: "2",
      label: "Completed",
      children: (
        <ShowBookings
          bookingsArray={bookingsArray.filter(
            (booking) => booking.bookingTime >= new Date().getTime()
          )}
        />
      ),
    },
  ];
  return (
    <div className="bookings-container">
      <Tabs defaultActiveKey="1" items={items} className="booking-tabs" />
    </div>
  );
};

export default Bookings;
