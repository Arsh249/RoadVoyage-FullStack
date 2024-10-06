import { filterKeys } from "./slice";

export const boardingAndDroppingPointsSelector = (state) =>
  state.tours?.tours?.data ?? {};

export const uniqueBusPartnersSelector = (state) => {
  return new Set(
    state.tours?.tours?.data?.tours?.map(({ busPartner }) => busPartner)
  );
};

export const priceRangeSelector = (state) => {
  return state.filters[filterKeys.PRICE_RANGE];
};
