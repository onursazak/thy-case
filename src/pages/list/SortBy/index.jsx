import style from './SortBy.module.scss';
import { SORT_CRITERIAS } from '../../../constants/common';

const SortBy = ({ onClick, type }) => {
  const handleClick = (type) => {
    onClick(type);
  };

  return (
    <div className={style.sortBy}>
      <div>Sıralama Kriteri</div>
      <button
        className={type === SORT_CRITERIAS.ECONOMY ? style.selected : undefined}
        type="button"
        onClick={() => handleClick(SORT_CRITERIAS.ECONOMY)}
      >
        Ekonomi Ücreti
      </button>
      <button
        className={
          type === SORT_CRITERIAS.DEPARTURE_TIME ? style.selected : undefined
        }
        type="button"
        onClick={() => handleClick(SORT_CRITERIAS.DEPARTURE_TIME)}
      >
        Kalkış saati
      </button>
    </div>
  );
};

export { SortBy };
