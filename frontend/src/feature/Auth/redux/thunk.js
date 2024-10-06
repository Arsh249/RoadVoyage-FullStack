import { RequestMethods } from "../../../network/constants";
import Endpoints from "../../../network/endpoints";
import request from "../../../network/request";
import { setIsLoggedIn, updateUserDetails } from "./slice";

export function getUserDetails() {
  return async function (dispatch) {
    const { success, data } = await request({
      url: Endpoints.user,
      method: RequestMethods.GET,
    });

    if (success) {
      localStorage.setItem("user", JSON.stringify(data.data));
      dispatch(setIsLoggedIn());
    }
  };
}
