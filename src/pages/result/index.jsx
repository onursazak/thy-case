import { FLIGHT_STATUS } from '../../constants/common';
import { PageLayout } from '../../layouts/PageLayout';
import { localStorageManager } from '../../utils/storage';
import { Success } from './Success';
import { Error } from './Error';

const Result = () => {
  const selectedCabinInfos = localStorageManager.getItem('selectedCabinInfos');

  return (
    <PageLayout headerType="dark">
      {selectedCabinInfos?.status === FLIGHT_STATUS.AVAILABLE ? (
        <Success price={selectedCabinInfos.price} />
      ) : (
        <Error />
      )}
    </PageLayout>
  );
};

export default Result;
