import { SORT_CRITERIAS } from '../../constants/common';

const sortCriteriaMap = {
  [SORT_CRITERIAS.ECONOMY]: (a, b) => {
    return (
      a.fareCategories.ECONOMY.subcategories[0].price.amount -
      b.fareCategories.ECONOMY.subcategories[0].price.amount
    );
  },
  [SORT_CRITERIAS.DEPARTURE_TIME]: (a, b) => {
    const today = new Date();
    const [arrivalHourA, arrivalMinuteA] = a.arrivalDateTimeDisplay.split(':');
    const [arrivalHourB, arrivalMinuteB] = b.arrivalDateTimeDisplay.split(':');
    const dateA = new Date(
      today.getFullYear(),
      today.getMonth(),
      arrivalHourA,
      arrivalMinuteA
    ).getTime();
    const dateB = new Date(
      today.getFullYear(),
      today.getMonth(),
      arrivalHourB,
      arrivalMinuteB
    ).getTime();

    return dateA - dateB;
  },
};

export { sortCriteriaMap };
