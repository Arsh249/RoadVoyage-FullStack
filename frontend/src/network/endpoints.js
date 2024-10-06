// const baseUrl = "https://bookmybus-jhyi.onrender.com";
const baseUrl = "https://abhibus-clone-full-stack.onrender.com";
// const baseUrl = "http://localhost:8080/";

const Endpoints = {
  signup: `${baseUrl}/auth/signup`,
  login: `${baseUrl}/auth/login`,
  user: `${baseUrl}/auth/user`,
  tours: `${baseUrl}/tour/tours`,
  seatLayout: `${baseUrl}/bus/layout`,
  book: `${baseUrl}/ticket/book`,
  cities: `${baseUrl}/cities`,
  trips: `${baseUrl}/ticket/trips`,
};

export default Endpoints;
