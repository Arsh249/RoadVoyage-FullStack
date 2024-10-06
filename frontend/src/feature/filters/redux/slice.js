import { createSlice } from "@reduxjs/toolkit";

export const filterKeys = {
  BOARDING_POINTS: "BOARDING_POINTS",
  DROPPING_POINTS: "DROPPING_POINTS",
  BUS_PARTNER: "BUS_PARTNER",
  BUS_TYPE: "BUS_TYPE",
  DEPARTURE_TIME: "DEPARTURE_TIME",
  PRICE_RANGE: "PRICE_RANGE",
};

export const departureTimeKeys = {
  MORNING: "MORNING",
  AFTERNOON: "AFTERNOON",
  EVENING: "EVENING",
  NIGHT: "NIGHT",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    [filterKeys.BOARDING_POINTS]: {},
    [filterKeys.DROPPING_POINTS]: {},
    [filterKeys.BUS_PARTNER]: {},
    [filterKeys.BUS_TYPE]: {},
    [filterKeys.DEPARTURE_TIME]: {},
    [filterKeys.PRICE_RANGE]: {
      range: [],
      selectedRange: [],
    },
  },
  reducers: {
    updateStop: (state, action) => {
      const { add, stopId, identifier } = action.payload;
      if (add) {
        state[identifier][stopId] = add;
      } else {
        delete state[identifier][stopId];
      }
    },
    updatePriceRange: (state, action) => {
      state[filterKeys.PRICE_RANGE].range = action.payload;
      state[filterKeys.PRICE_RANGE].selectedRange = action.payload;
    },
    updateSelectedPriceRange: (state, action) => {
      state[filterKeys.PRICE_RANGE].selectedRange = action.payload;
    },
    clearAllFilters: (state) => {
      return {
        ...state,
        [filterKeys.BOARDING_POINTS]: {},
        [filterKeys.DROPPING_POINTS]: {},
        [filterKeys.BUS_PARTNER]: {},
        [filterKeys.BUS_TYPE]: {},
        [filterKeys.DEPARTURE_TIME]: {},
      };
    },
  },
});

export const {
  updateStop,
  updatePriceRange,
  updateSelectedPriceRange,
  clearAllFilters,
} = filtersSlice.actions;

export default filtersSlice;
