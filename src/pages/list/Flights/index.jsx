import { useState, createContext } from 'react';
import { Flight } from '../Flight';
import style from './Flights.module.scss';

export const FlightsContent = createContext();

const Flights = ({ flights, enabledPromotionCode }) => {
  const [selectedFlightIndex, setSelectedFlightIndex] = useState();
  const [selectedFareInputId, setSelectedFareInputId] = useState(null);
  const [selectedFare, setSelectedFare] = useState();

  const getFareCategory = (fare, index, inputId) => {
    setSelectedFare(fare);
    setSelectedFlightIndex(index);
    setSelectedFareInputId(inputId);
  };

  const fareSubCategories =
    flights?.[selectedFlightIndex]?.fareCategories?.[selectedFare]
      ?.subcategories;

  return (
    <FlightsContent.Provider value={{ enabledPromotionCode }}>
      <div className={style.flights}>
        {flights.map((flight, index) => {
          return (
            <Flight
              key={flight.arrivalDateTimeDisplay}
              index={index}
              flight={flight}
              getFareCategory={getFareCategory}
              fareSubCategories={
                selectedFlightIndex === index ? fareSubCategories : null
              }
              selectedFareInputId={selectedFareInputId}
            />
          );
        })}
      </div>
    </FlightsContent.Provider>
  );
};

export { Flights };
