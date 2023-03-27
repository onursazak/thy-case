import style from './FlightDates.module.scss';

const FlightDates = ({ info }) => {
  return (
    <div className={style.flightDates}>
      <div>
        <div>
          <b>{info.departureDateTimeDisplay}</b>
        </div>
        <div>{info.originAirport.city.code}</div>
        <div>{info.originAirport.city.name}</div>
      </div>
      <div className={style.line}></div>
      <div className={style.arrival}>
        <div>{info.arrivalDateTimeDisplay}</div>
        <div>{info.destinationAirport.city.code}</div>
        <div>{info.destinationAirport.city.name}</div>
      </div>
      <div className={style.flightTime}>
        <div>Uçuş süresi</div>
        <div>
          <b>{info.flightDuration}</b>
        </div>
      </div>
    </div>
  );
};

export { FlightDates };
