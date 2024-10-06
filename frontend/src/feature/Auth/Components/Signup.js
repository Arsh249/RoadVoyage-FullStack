import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Segmented,
  message,
} from "antd";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slice";
import "../Styles/Signup.scss";

const SignUp = ({ handleSignupSuccess }) => {
  const dispatch = useDispatch();

  const handleSignup = async (data) => {
    data.dob = data.dob.$d.getTime();
    data.gender = data.gender === "Female" ? "F" : "M";
    const result = await dispatch(signup(data));
    if (signup.fulfilled.match(result)) {
      message.success("Signup successful!");
      handleSignupSuccess();
    } else {
      message.error(result.payload || "Signup Failed");
    }
  };
  return (
    <Form className="signup-container" onFinish={handleSignup}>
      <h1>Signup to RoadVoyage</h1>

      <Form.Item
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input placeholder="Enter Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Email is required" },
          { type: "email", message: "The input is not valid E-mail!" },
        ]}
      >
        <Input placeholder="Enter Email" />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[
          { required: true, message: "Phone Number is required" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits!",
          },
        ]}
      >
        <Input placeholder="Enter Phone Number" />
      </Form.Item>

      <ConfigProvider
        theme={{
          components: {
            Segmented: styles.segmented,
          },
        }}
      >
        <Form.Item name="gender">
          <Segmented options={["Male", "Female"]} />
        </Form.Item>
      </ConfigProvider>
      <Form.Item
        name="dob"
        label="Date of Birth"
        rules={[{ required: true, message: "DOB is required" }]}
      >
        <DatePicker className="date-picker" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Password is required" },
          {
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
            message:
              "Password must have min 6 and max 12 characters, Contain at least one uppercase, one lowercase, one special and one number",
          },
        ]}
      >
        <Input.Password className="password" placeholder="Enter Password" />
      </Form.Item>

      <Button htmlType="submit">Signup</Button>
    </Form>
  );
};
export default SignUp;

const styles = {
  segmented: {
    itemColor: "black",
    itemSelectedColor: "#ffffff",
    itemSelectedBg: "#DC635B",
    fontSize: 15,
    controlPaddingHorizontal: 25,
  },
};
