import { useDispatch } from "react-redux";
import { login, setIsLoggedIn } from "../redux/slice";
import { Button, Form, Input, message } from "antd";
import "../Styles/Login.scss";
import { getUserDetails } from "../redux/thunk";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const result = await dispatch(login(data));
    if (login.fulfilled.match(result)) {
      message.success("Login successful!");
      dispatch(setIsLoggedIn());
      dispatch(getUserDetails());
    } else {
      message.error(result.payload || "Login failed");
    }
  };
  return (
    <Form className="login-form" onFinish={handleLogin}>
      <h1>Login to RoadVoyage</h1>
      <label>Enter Email to Login</label>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Email is required" }]}
      >
        <Input placeholder="Enter Email" />
      </Form.Item>
      <label>Enter Password</label>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Password is required" }]}
      >
        <Input.Password className="password" placeholder="Password" />
      </Form.Item>

      <Button htmlType="submit">Login</Button>
    </Form>
  );
};
export default Login;
