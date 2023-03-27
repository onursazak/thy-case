import { useEffect, useRef, useState } from 'react';
import { localStorageManager } from '../../utils/storage';
import { PageLayout } from '../../layouts/PageLayout';
import { FlightInfo } from './FlightInfo';
import { Flights } from './Flights';
import { SortBy } from './SortBy';
import { SORT_CRITERIAS, BRAND_CODE } from '../../constants/common';
import { fetchFlights } from '../../api/mockApi';
import { sortCriteriaMap } from './sortByCriteria';
import PromotionCodeSwitch from './PromotionCodeSwitch';

const List = () => {
  const initialFlights = useRef();

  const [flights, setFlights] = useState([]);
  const [enablePromotionCode, setEnablePromotionCode] = useState(false);
  const [sortType, setSortType] = useState(SORT_CRITERIAS.ECONOMY);

  const queryData = localStorageManager.getItem('queryData');

  useEffect(() => {
    const fetchData = async () => {
      const flights = await fetchFlights();
      initialFlights.current = flights;
      setFlights(
        sortFlightsByCriteria(initialFlights.current, SORT_CRITERIAS.ECONOMY)
      );
    };
    fetchData();
  }, []);

  const handlePromotionSwitch = (event) => {
    const isPromotionCodeEnabled = event.target.checked;
    setEnablePromotionCode(isPromotionCodeEnabled);
    discountEcoFlyBy50Percent(isPromotionCodeEnabled);
  };

  const discountEcoFlyBy50Percent = (isPromotionCodeEnabled) => {
    if (!isPromotionCodeEnabled) {
      setFlights(initialFlights.current);
      return;
    }

    setFlights(
      JSON.parse(JSON.stringify(flights)).map((flight) => {
        /**
         * 
         *  @see Eğer business cabine ait ecoFly uçuşlarda da indirim 
         *  uygulanması isteniyorsa commentli kısım kullanılabilir.
         * */ 
        
        // const businessSubCategoriesWithDiscount = discount50Percent(
        //   flight.fareCategories.BUSINESS.subcategories
        // );
        const economySubCategoriesWithDiscount = discount50Percent(
          flight.fareCategories.ECONOMY.subcategories
        );

        const fareCategories = {
          BUSINESS: {
            subcategories: flight.fareCategories.BUSINESS.subcategories,
          },
          ECONOMY: { subcategories: economySubCategoriesWithDiscount },
        };

        return {
          ...flight,
          fareCategories,
        };
      })
    );
  };

  const handleSortType = (criteria) => {
    setSortType(criteria);
    setFlights(sortFlightsByCriteria(flights, criteria));
  };

  const sortFlightsByCriteria = (_flights, criteria) => {
    return [..._flights.sort(sortCriteriaMap[criteria])];
  };

  return (
    <PageLayout headerType="dark">
      <FlightInfo queryData={queryData} />
      <PromotionCodeSwitch
        enablePromotionCode={enablePromotionCode}
        onChange={handlePromotionSwitch}
      />
      <SortBy onClick={handleSortType} type={sortType} />
      <Flights
        flights={flights}
        enabledPromotionCode={enablePromotionCode}
        key={sortType}
      />
    </PageLayout>
  );
};

const discount50Percent = (subCategories) => {
  return subCategories.map((subCategory) => {
    if (subCategory.brandCode === BRAND_CODE.ECO_FLY) {
      subCategory.price.amount = subCategory.price.amount / 2;
    }
    return subCategory;
  });
};

export default List;
