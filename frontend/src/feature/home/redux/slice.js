import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const initialState = {
    cities: [],
    selection: {
        cityId: null,
        sourceCity: null,
        destCity: null,
        date: null,
    },
    apiStatus: "init"
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateCityId: (state, action) => {
            state.selection.cityId = action.payload;
        },
        updateSourceCity: (state, action) => {
            state.selection.sourceCity = action.payload;
        },
        updateDestCity: (state, action) => {
            state.selection.destCity = action.payload;
        },
        updateSelectedDate(state, action){
            state.selection.date = action.payload;
        },
        updateCitiesApiStatus(state, action) {
            state.apiStatus = action.payload.apiStatus;
            if (action.payload.apiStatus === ApiStatus.success) {
                state.cities = action.payload.data;
            }
        },
    },
});

export const {updateCityId, updateSourceCity, updateDestCity, updateCitiesApiStatus, updateSelectedDate } = searchSlice.actions;