import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import style from './Error.module.scss';

const Error = () => {
  return (
    <div className={style.error}>
      <div className={style.message}>
        <div>
          <CancelIcon color="error" fontSize="large" />
        </div>
        <div>Kabin seçiminiz tamamlanamadı.</div>
      </div>
      <div className={style.backToHomepage}>
        <Link to="/">Başa dön</Link>
      </div>
    </div>
  );
};

export { Error };
