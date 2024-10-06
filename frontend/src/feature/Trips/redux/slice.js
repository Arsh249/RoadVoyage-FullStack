import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const tripSlice = createSlice({
  name: "trips",
  initialState: {
    bookings: [],
    status: "init",
  },
  reducers: {
    updateTripsApiStatus: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === ApiStatus.success) {
        state.bookings = data.data;
      }
      state.status = apiStatus;
    },
  },
});

export const { updateTrips, updateTripsApiStatus } = tripSlice.actions;

export default tripSlice;
