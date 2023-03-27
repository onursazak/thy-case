import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import style from './Error.module.scss';

const Error = ({ hasCabin }) => {
  const msg = hasCabin
    ? 'Kabin seçiminiz tamamlanamadı.'
    : 'Seçilen herhangi bir kabin bulunamadı';

  return (
    <div className={style.error}>
      <div className={style.message}>
        <div>
          <CancelIcon color="error" fontSize="large" />
        </div>
        <div>{msg}</div>
      </div>
      <div className={style.backToHomepage}>
        <Link to="/">Başa dön</Link>
      </div>
    </div>
  );
};

export { Error };
