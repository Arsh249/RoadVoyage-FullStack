import { notification } from "antd";
import { ApiStatus, RequestMethods } from "../../../network/constants";
import Endpoints from "../../../network/endpoints";
import request from "../../../network/request";
import { updateBookingStatus } from "./slice";

export function saveBooking(formData) {
  return async function (dispatch, getState) {
    dispatch(updateBookingStatus(ApiStatus.pending));
    const map = new Map();

    Object.keys(formData).forEach((key) => {
      const [seatNumer, val] = key.split("_");
      map[seatNumer] = map[seatNumer] ? map[seatNumer] : {};
      if (val === "gender") {
        map[seatNumer][val] = formData[key] ?? "M";
      } else map[seatNumer][val] = formData[key];
      map[seatNumer]["seatNumber"] = seatNumer;
    });

    const seats = [];
    for (let value of Object.values(map)) {
      seats.push(value);
    }

    const tourId = getState().booking.service?.tourId;

    const { success, data } = await request({
      url: Endpoints.book,
      method: RequestMethods.POST,
      data: {
        tourId,
        seats,
      },
    });

    if (success) {
      dispatch(updateBookingStatus(ApiStatus.success));
      localStorage.removeItem("booking");
      notification.success({
        message: "Booking success",
        description:
          typeof data === "string" ? data : "You'r booking is successful",
      });
    } else {
      notification.error({
        message: "Booking Failed",
        description: typeof data === "string" ? data : "Try again...",
      });
      dispatch(updateBookingStatus(ApiStatus.error));
    }
  };
}
