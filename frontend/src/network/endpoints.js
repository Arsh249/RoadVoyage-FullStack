// const baseUrl = "http://localhost:8080";
const baseUrl = "https://roadvoyage-fullstack.onrender.com";

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
