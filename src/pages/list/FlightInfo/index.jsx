import style from './FlightInfo.module.scss';

const FlightInfo = ({ queryData }) => {
  return queryData ? (
    <div className={style.flightInfo}>
      <div>Uçuş</div>
      <div>
        {queryData.selectedAirports.origin} -{' '}
        {queryData.selectedAirports.destination},
        {queryData.passengerInfos.count} Yolcu
      </div>
    </div>
  ) : null;
};

export { FlightInfo };
