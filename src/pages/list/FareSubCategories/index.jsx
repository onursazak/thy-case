import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './FareSubCategories.module.scss';
import { localStorageManager } from '../../../utils/storage';
import { BRAND_CODE } from '../../../constants/common';
import { FlightsContent } from '../Flights';

const FareSubCategories = ({ items }) => {
  return (
    <section className={style.fareSubCategories}>
      {items.map((item) => {
        return <FareSubCategory key={item.order} detail={item} />;
      })}
    </section>
  );
};

const FareSubCategory = ({ detail }) => {
  const { enabledPromotionCode } = useContext(FlightsContent);
  const navigate = useNavigate();

  const handleSelectFlight = () => {
    localStorageManager.setItem('selectedCabinInfos', {
      status: detail.status,
      price: detail.price,
    });
    navigate('/result');
  };

  const isDisabled =
    enabledPromotionCode && detail.brandCode !== BRAND_CODE.ECO_FLY;

  return (
    <section className={style.subCategory}>
      <div className={style.header}>
        <div className={style.subCategoryName}>{detail.brandCode}</div>
        <div className={style.price}>
          <span className={style.currency}>{detail.price.currency}</span>{' '}
          <span className={style.amount}>{detail.price.amount}</span>
        </div>
      </div>
      <ul className={style.rights}>
        {detail.rights.map((right) => {
          return <li key={right}>{right}</li>;
        })}
      </ul>
      <div className={style.selectFlight}>
        <button
          type="button"
          onClick={handleSelectFlight}
          disabled={isDisabled}
        >
          Uçuşu seç
        </button>
      </div>
    </section>
  );
};

export { FareSubCategories };
