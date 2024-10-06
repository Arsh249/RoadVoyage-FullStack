import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Home from "./feature/home";
import Tours from "./feature/tours";
import Booking from "./feature/Booking";
import { GlobalNotifier } from "./components/GlobalNotifier";
import RoadVoyageApp from "./RoadVoyageApp";
import Trips from "./feature/Trips";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <GlobalNotifier />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<RoadVoyageApp />}>
              <Route path="" element={<Home />} />
              <Route
                path="bus_search/:sourceCity/:sourceCityId/:destCity/:destCityId/:travelDate"
                element={<Tours />}
              />
              <Route path="passengerInfo" element={<Booking />} />
              <Route path="trips" element={<Trips />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

root.render(<App />);
