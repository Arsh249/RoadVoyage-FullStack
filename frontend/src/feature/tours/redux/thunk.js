import { ApiStatus } from "../../../network/constants";
import Endpoints from "../../../network/endpoints";
import request from "../../../network/request";
import { updatePriceRange } from "../../filters/redux/slice";
import { updateSeatLayoutApiStatus, updateToursApiStatus } from "./slice";

export function fetchAllTours(sourceCityId, destinationCityId, travelDate) {
  return async function (dispatch) {
    dispatch(updateToursApiStatus({ apiStatus: ApiStatus.pending }));
    const { success, data } = await request({
      url: Endpoints.tours,
      method: "POST",
      data: {
        sourceCityId: Number(sourceCityId),
        destinationCityId: Number(destinationCityId),
        date: new Date(travelDate).getTime(),
      },
    });
    dispatch(
      updateToursApiStatus({
        apiStatus: success ? ApiStatus.success : ApiStatus.error,
        ...(data && { data }),
      })
    );

    if (success) {
      // overall min and max prices in all the tours
      const range = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      data?.tours?.forEach((tour) => {
        range[0] > tour.minPrice && (range[0] = tour.minPrice);
        range[1] < tour.maxPrice && (range[1] = tour.maxPrice);
      });

      dispatch(updatePriceRange(range));
    }
  };
}

export function fetchSeatLayout(tourId) {
  return async function (dispatch) {
    dispatch(
      updateSeatLayoutApiStatus({ apiStatus: ApiStatus.pending, tourId })
    );
    const { success, data } = await request({
      url: Endpoints.seatLayout,
      params: { tourId },
    });
    dispatch(
      updateSeatLayoutApiStatus({
        apiStatus: success ? ApiStatus.success : ApiStatus.error,
        ...(data && { data }),
        tourId,
      })
    );
  };
}
