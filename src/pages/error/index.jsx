import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PageLayout } from '../../layouts/PageLayout';
import style from './ErrorPage.module.scss';

export default function Error() {
  return (
    <PageLayout>
      <div className={style.content}>
        <Typography fontSize={'20px'}>
          Keşfetmeye duyduğunuz tutkuya hayranız.{' '}
        </Typography>
        <Typography fontSize={'20px'}>
          Hiçbir yerde var olmayan bir sayfayı aradınız.
        </Typography>
        <Link to="/" className={style.backToHomepage}>
          Anasayfaya dön
        </Link>
      </div>
    </PageLayout>
  );
}
