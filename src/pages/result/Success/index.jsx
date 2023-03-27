import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import style from './Success.module.scss';

const Success = ({ price }) => {
  return (
    <div className={style.success}>
      <div className={style.message}>
        <div>
          <CheckCircleOutlineIcon color="success" fontSize="large" />
        </div>
        <div>Kabin seçiminiz tamamlandı.</div>
      </div>
      <div className={style.totalAmount}>
        <div>Toplam Tutar</div>
        <div>
          <b>
            {price.currency} {price.amount}
          </b>
        </div>
      </div>
    </div>
  );
};

export { Success };
