import { Tabs } from "antd";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import { useState } from "react";
import "./Styles/Auth.scss";

const Auth = ({ closable, handleCloseBtn }) => {
  const [activeKey, setActiveKey] = useState("1");

  const handleSignupSuccess = () => {
    setActiveKey("1");
  };
  const items = [
    {
      key: "1",
      label: "Login",
      children: <Login />,
    },
    {
      key: "2",
      label: "Signup",
      children: <SignUp handleSignupSuccess={handleSignupSuccess} />,
    },
  ];
  return (
    <div className="Auth-container">
      <div className="form-container">
        {closable && (
          <button className="close-btn material-icons" onClick={handleCloseBtn}>
            close
          </button>
        )}
        <Tabs
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={setActiveKey}
          items={items}
        />
      </div>
    </div>
  );
};

export default Auth;
