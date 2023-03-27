import style from './FlightInfo.module.scss';

const FlightInfo = ({ queryData }) => {
  return (
    <div className={style.flightInfo}>
      <div>Uçuş</div>
      <div>
        {queryData.selectedAirports.origin} -{' '}
        {queryData.selectedAirports.destination},
        {queryData.passengerInfos.count} Yolcu
      </div>
    </div>
  );
};

export { FlightInfo };
