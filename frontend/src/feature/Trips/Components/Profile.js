import { useSelector } from "react-redux";
import { formatDate } from "../../Booking/Components/constantfunc";
import "../Styles/Profile.scss";

const Profile = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  return (
    <div className="profile-container">
      <h2>Profile Info</h2>
      <div className="user-details">
        <div>
          <p>Name</p>
          <h3>{userDetails.name}</h3>
        </div>
        <div>
          <p>Email</p>
          <h3>{userDetails.email}</h3>
        </div>
        <div>
          <p>Gender</p>
          <h3>{userDetails.gender === "M" ? "Male" : "Female"}</h3>
        </div>
        <div>
          <p>Mobile Number</p>
          <h3>{userDetails.phoneNumber}</h3>
        </div>
        <div>
          <p>DOB</p>
          <h3>{formatDate(userDetails.dob)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
