import { ApiStatus } from "../../../network/constants";
import Endpoints from "../../../network/endpoints";
import request from "../../../network/request";
import { updateCitiesApiStatus } from "./slice";

export async function fetchCities(dispatch) {
  dispatch(updateCitiesApiStatus({ apiStatus: ApiStatus.pending }));
  const { success, data } = await request({
    url: Endpoints.cities,
  });
  dispatch(
    updateCitiesApiStatus({
      apiStatus: success ? ApiStatus.success : ApiStatus.error,
      data: data?.cities,
    })
  );
}
     


