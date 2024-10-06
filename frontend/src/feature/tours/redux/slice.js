import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    tours: {
      data: null,
      apiStatus: "init",
    },
    layouts: {},
    selectedTour: {},
  },
  reducers: {
    toggleBoardingPoint: (state, action) => {
      if (state.selectedTour[action.payload.tourId]?.boardingPoint?.stopId) {
        state.selectedTour[action.payload.tourId].boardingPoint = {};
      }
      state.selectedTour[action.payload.tourId].boardingPoint =
        action.payload.stop;
    },

    toggleDroppingPoint: (state, action) => {
      if (state.selectedTour[action.payload.tourId]?.droppingPoint?.stopId) {
        state.selectedTour[action.payload.tourId].droppingPoint = {};
      }
      state.selectedTour[action.payload.tourId].droppingPoint =
        action.payload.stop;
    },

    toggleSeatSelection: (state, action) => {
      const seat = action.payload.seat;

      const index = state.selectedTour[action.payload.tourId].seats.findIndex(
        (s) => s.seatNumber === seat.seatNumber
      );
      if (index !== -1) {
        state.selectedTour[action.payload.tourId].seats.splice(index, 1);
      } else {
        state.selectedTour[action.payload.tourId].seats.push(seat);
      }
    },

    setSelectedTour: (state, action) => {
      state.selectedTour[action.payload.tourId] = {
        seats: [],
        boardingPoint: {},
        droppingPoint: {},
      };
    },

    updateToursApiStatus: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === ApiStatus.success) {
        state.tours.data = data;
      }
      state.tours.apiStatus = apiStatus;
    },

    updateSeatLayoutApiStatus: (state, action) => {
      const { apiStatus, tourId, data } = action.payload;
      if (!state.layouts[tourId]) {
        state.layouts[tourId] = {
          apiStatus,
        };
      }
      state.layouts[tourId].apiStatus = apiStatus;
      if (apiStatus === ApiStatus.success) {
        state.layouts[tourId].data = data;
      }
    },

    removeSeletedTour: (state, action) => {
      delete state.selectedTour[action.payload.tourId];
    },
  },
});

export const {
  toggleBoardingPoint,
  toggleDroppingPoint,
  toggleSeatSelection,
  setSelectedTour,
  removeSeletedTour,
  updateToursApiStatus,
  updateSeatLayoutApiStatus,
} = toursSlice.actions;

export default toursSlice;
