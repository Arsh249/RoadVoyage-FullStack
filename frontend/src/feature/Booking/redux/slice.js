import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const initialState = {
  sourceCity: null,
  destCity: null,
  service: null,
  boarding: null,
  dropping: null,
  seats: [],
  status: ApiStatus.init,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingInfo: (state, action) => {
      const { sourceCity, destCity, service, boarding, dropping, seats } =
        action.payload;
      return {
        ...state,
        sourceCity,
        destCity,
        service,
        boarding,
        dropping,
        seats,
      };
    },
    updateBookingStatus: (state, action) => {
      state.status = action.payload;
    },
    resetBooking: (state) => {
      state.service = null;
    },
  },
});

export const { setBookingInfo, updateBookingStatus, resetBooking } =
  bookingSlice.actions;

export default bookingSlice;
