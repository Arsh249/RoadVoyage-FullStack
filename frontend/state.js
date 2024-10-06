let state = {
  tours: [
    {
      tourId: "",
      busId: "",
    },
  ],
  layouts: {
    54851: {
      apiStatus: "init",
      data: layoutData,
    },
  },
  selectedTour: {
    [tourId]: {
      seats: [
        { seatId: "L4", price: 1000 },
        { seatId: "L5", price: 200 },
      ],
      boardingPoint: {
        name: "",
        description: "",
        stopId: 2930,
      },
      droppingPoint: {
        name: "",
        description: "",
        stopId: 2930,
      },
    },
  },
};

let filtersState = {
  // filters data
};
