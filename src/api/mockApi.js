import { mockData } from '../mockData';

export const fetchCities = async () => {
  return new Promise((resolve) => {
    const originAirports = new Set();
    const destinationAirports = new Set();

    mockData.flights.forEach((flight) => {
      originAirports.add(flight.originAirport.city.name);
      destinationAirports.add(flight.destinationAirport.city.name);
    });

    resolve({
      originAirports: Array.from(originAirports),
      destinationAirports: Array.from(destinationAirports),
    });
  });
};

export const fetchFlights = async () => {
  return new Promise((resolve) => {
    resolve(mockData.flights);
  });
};
