import { useSelector } from "react-redux";
import { ApiStatus } from "../../../network/constants";
import { createSelector } from "@reduxjs/toolkit";
import { departureTimeKeys, filterKeys } from "../../filters/redux/slice";

export const useBoarding = (tourId) =>
  useSelector((state) => state.tours.selectedTour[tourId]?.boardingPoint || {});

export const useDropping = (tourId) =>
  useSelector((state) => state.tours.selectedTour[tourId]?.droppingPoint || {});

export const useSelectedSeats = (tourId) =>
  useSelector((state) => state.tours.selectedTour[tourId]?.seats || []);

export const stopPointsSelector = (state, tourId) => {
  let sourceStops, destinationStops;
  state.tours.tours?.data?.tours.forEach((tour) => {
    if (tourId === tour.tourId) {
      sourceStops = tour.sourceStops;
      destinationStops = tour.destinationStops;
    }
  });

  const boardingPoints = state.tours?.tours?.data?.boardingPoints;
  const droppingPoints = state.tours?.tours?.data?.droppingPoints;

  const source = [],
    dest = [];

  boardingPoints.forEach((boardingPoint) => {
    sourceStops.forEach((sourceStop) => {
      if (sourceStop.stopId === boardingPoint.stopId) {
        source.push({
          ...sourceStop,
          ...boardingPoint,
        });
      }
    });
  });

  droppingPoints.forEach((droppingPoint) => {
    destinationStops.forEach((destStop) => {
      if (destStop.stopId === droppingPoint.stopId) {
        dest.push({
          ...destStop,
          ...droppingPoint,
        });
      }
    });
  });

  return { boardingPoints: source, droppingPoints: dest };
};

export const toursApiStatusSelector = (state) => state.tours.tours.apiStatus;

export const seatLayoutApiStatusSelector = (tourId, state) =>
  state.tours.layouts?.[tourId]?.apiStatus ?? ApiStatus.init;

export const filteredToursSelector = createSelector(
  [(state) => state.tours?.tours?.data?.tours ?? [], (state) => state.filters],
  (tours, filters) => {
    return tours
      .filter((tour) => {
        const busTypes = Object.keys(filters[filterKeys.BUS_TYPE]);
        if (busTypes.length === 0) return true;
        return busTypes.includes(tour.busType);
      })
      .filter((tour) => {
        const busPartners = Object.keys(filters[filterKeys.BUS_PARTNER]);
        if (busPartners.length === 0) return true;
        return busPartners.includes(tour.busPartner);
      })
      .filter((tour) => {
        const selectedBoardingPoints = filters[filterKeys.BOARDING_POINTS];
        if (Object.keys(selectedBoardingPoints).length === 0) return true;
        const sourceStops = tour?.sourceStops ?? [];
        for (const stop of sourceStops) {
          if (selectedBoardingPoints[stop.stopId]) {
            return true;
          }
        }
        return false;
      })
      .filter((tour) => {
        const selectedDroppingPoints = filters[filterKeys.DROPPING_POINTS];
        if (Object.keys(selectedDroppingPoints).length === 0) return true;

        const destinationStops = tour?.destinationStops ?? [];
        for (const stop of destinationStops) {
          if (selectedDroppingPoints[stop.stopId]) {
            return true;
          }
        }
        return false;
      })
      .filter((tour) => {
        const [min, max] = filters[filterKeys.PRICE_RANGE].selectedRange;
        return tour.maxPrice >= min && tour.minPrice <= max;
      })
      .filter((tour) => {
        const departureTime = filters[filterKeys.DEPARTURE_TIME];
        const departureTimes = Object.keys(departureTime);
        if (departureTimes.length === 0) return true;
        const date = new Date(window.location.href.split("/").slice(-1)[0]);

        const time10AM = new Date(date).setHours(10, 0, 0, 0);
        const time5PM = new Date(date).setHours(17, 0, 0, 0);
        const time11PM = new Date(date).setHours(23, 0, 0, 0);

        let filtered = false;
        tour?.sourceStops?.forEach((stop) => {
          const arrivalTime = stop.arrivalTime;
          if (departureTime[departureTimeKeys.MORNING]) {
            filtered ||= arrivalTime <= time10AM;
          } else if (departureTime[departureTimeKeys.AFTERNOON]) {
            filtered ||= arrivalTime >= time10AM && arrivalTime <= time5PM;
          } else if (departureTime[departureTimeKeys.EVENING]) {
            filtered ||= arrivalTime >= time5PM && arrivalTime <= time11PM;
          } else if (departureTime[departureTimeKeys.NIGHT]) {
            filtered ||= arrivalTime >= time11PM;
          }
        });

        return filtered;
      });
  }
);
