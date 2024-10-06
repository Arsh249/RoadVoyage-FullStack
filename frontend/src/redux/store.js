import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../feature/filters/redux/slice";
import toursSlice from "../feature/tours/redux/slice";
import authSlice from "../feature/Auth/redux/slice";
import bookingSlice from "../feature/Booking/redux/slice";
import { searchSlice } from "../feature/home/redux/slice";
import tripSlice from "../feature/Trips/redux/slice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    search: searchSlice.reducer,
    tours: toursSlice.reducer,
    auth: authSlice.reducer,
    booking: bookingSlice.reducer,
    trips: tripSlice.reducer,
  },
});

export default store;
