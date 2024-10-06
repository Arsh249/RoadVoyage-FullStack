const searchSelector = (state) => state.search;
export const citiesSelector = (state) => searchSelector(state).cities;
export const citiesApiStatusSelector = (state) =>
  searchSelector(state).apiStatus;
