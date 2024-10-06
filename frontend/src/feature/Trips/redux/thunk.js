import { ApiStatus, RequestMethods } from "../../../network/constants";
import Endpoints from "../../../network/endpoints";
import request from "../../../network/request";
import { updateTripsApiStatus } from "./slice";

export function getTrips() {
  return async function (dispatch) {
    dispatch(updateTripsApiStatus({ apiStatus: ApiStatus.pending }));
    const { success, data } = await request({
      url: Endpoints.trips,
      method: RequestMethods.GET,
    });

    dispatch(
      updateTripsApiStatus({
        apiStatus: success ? ApiStatus.success : ApiStatus.error,
        ...(data && { data }),
      })
    );
  };
}
