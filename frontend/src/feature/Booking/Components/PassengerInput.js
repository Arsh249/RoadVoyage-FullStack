import { ConfigProvider, Form, Input, Segmented } from "antd";

const genders = [
  { label: "Male", value: "M", className: "gender-input" },
  { label: "Female", value: "F", className: "gender-input" },
];
const PassengerInput = ({ seat }) => {
  return (
    <div className="passenger-input">
      <p>
        Add Passenger for : <span>{seat.seatNumber}</span>
      </p>
      <div className="input-container">
        <Form.Item
          name={`${seat.seatNumber}_name`}
          rules={[
            { required: true, message: "Please Enter Valid Name" },
            { min: 2, message: "Please Enter Valid Name" },
            { type: "string", message: "Please Enter Valid Name" },
          ]}
        >
          <Input className="name-input" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name={`${seat.seatNumber}_age`}
          className="age-input-container"
          rules={[
            {
              required: true,
              message: "Please Enter Age between 12 and 99",
            },
          ]}
        >
          <Input className="age-input" placeholder="Age" />
        </Form.Item>
        <ConfigProvider
          theme={{
            components: {
              Segmented: styles.segmented,
            },
          }}
        >
          <Form.Item name={`${seat.seatNumber}_gender`}>
            <Segmented options={genders} />
          </Form.Item>
        </ConfigProvider>
      </div>
    </div>
  );
};

const styles = {
  segmented: {
    itemColor: "black",
    itemSelectedColor: "#ffffff",
    itemSelectedBg: "#DC635B",
    fontSize: 15,
    controlPaddingHorizontal: 12,
  },
};
export default PassengerInput;
