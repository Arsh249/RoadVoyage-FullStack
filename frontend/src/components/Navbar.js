import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bus, Logo, UserIcon } from "./icons2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Auth from "../feature/Auth";
import { Drawer, Dropdown, Space } from "antd";
import Cookies from "js-cookie";
import { setIsLoggedIn } from "../feature/Auth/redux/slice";
import "../styles/Navbar.scss";
import Filters from "../feature/filters";

const UserDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.auth.userDetails);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    dispatch(setIsLoggedIn());
  };

  const showBookings = () => {
    navigate("/trips");
  };
  const items = [
    {
      label: <p>{userDetails.name}</p>,
      key: 0,
    },
    {
      label: <p onClick={showBookings}>Bookings</p>,
      key: 1,
    },
    {
      label: (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ),
      key: 2,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <Space>
        <UserIcon color={"#444444"} />
      </Space>
    </Dropdown>
  );
};
const Navbar = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  const isBusSearch = location.pathname.split("/").includes("bus_search");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAuthClick = () => {
    if (!isLoggedIn) setOpenAuth(true);
  };
  const handleCloseBtn = () => {
    setOpenAuth(false);
  };

  return (
    <div className="navbar-container">
      {openAuth && <Auth closable={true} handleCloseBtn={handleCloseBtn} />}
      <div className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <div className="bus-icon">
            <Bus width="1.5em" height="1.5em" />
            Buses
          </div>
        </div>
        <div className="filter-and-auth-container">
          {screenWidth <= 850 && isBusSearch && (
            <>
              <button
                className="material-icons filter-icon"
                onClick={() => setOpenDrawer(true)}
              >
                filter_list
              </button>
              <Drawer
                width={screenWidth - 20}
                title="Apply Filters"
                open={openDrawer}
                closable
                onClose={() => setOpenDrawer(false)}
                styles={{ body: { padding: 0 } }}
              >
                <Filters />
              </Drawer>
            </>
          )}
          <button className="auth-btn" onClick={handleAuthClick}>
            {isLoggedIn ? (
              <UserDropdown />
            ) : (
              <>
                <UserIcon />
                <p>Login/SignUp</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
