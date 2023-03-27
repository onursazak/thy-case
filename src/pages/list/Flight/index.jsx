import style from './Flight.module.scss';
import { FlightDates } from '../FlightDates';
import { FareCategory } from '../FareCategory';
import { FareSubCategories } from '../FareSubCategories';

const Flight = ({
  index,
  flight,
  getFareCategory,
  fareSubCategories,
  selectedFareInputId,
}) => {
  const handleFare = (fare, inputId) => {
    getFareCategory(fare, index, inputId);
  };

  return (
    <div>
      <div className={style.flight}>
        <FlightDates info={flight} />
        <FareCategory
          category="ECONOMY"
          categoryInfo={flight.fareCategories.ECONOMY}
          onClick={handleFare}
          selectedFareInputId={selectedFareInputId}
          index={index}
        />
        <FareCategory
          category="BUSINESS"
          categoryInfo={flight.fareCategories.BUSINESS}
          onClick={handleFare}
          selectedFareInputId={selectedFareInputId}
          index={index}
        />
      </div>
      {fareSubCategories && fareSubCategories.length > 0 && (
        <FareSubCategories items={fareSubCategories} />
      )}
    </div>
  );
};
export { Flight };
