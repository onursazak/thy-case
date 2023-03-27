import { useEffect, useState } from 'react';
import style from './Searchbar.module.scss';
import { fetchCities } from '../../../api/mockApi';
import { RightIcon } from '../../../icons/RightIcon';
import BoyIcon from '@mui/icons-material/Boy';
import PassengerPicker from '../PassengerPicker';
import { useNavigate } from 'react-router-dom';
import { compareIgnoreCase } from '../../../utils/common';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { localStorageManager } from '../../../utils/storage';

const Searchbar = () => {
  const navigate = useNavigate();
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedAirports, setSelectedAirports] = useState({
    origin: '',
    destination: '',
  });
  const [passengerInfos, setPassengerInfos] = useState({
    count: 1,
    class: 'economy',
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { originAirports, destinationAirports } = await fetchCities();
      setOrigins(originAirports);
      setDestinations(destinationAirports);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedAirports({
      ...selectedAirports,
      [event.target.name]: event.target.value,
    });
  };

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePassengerPicker = () => {
    setAnchorEl(null);
  };

  const incrementPassengerCount = () => {
    setPassengerInfos({ ...passengerInfos, count: passengerInfos.count + 1 });
  };
  const decrementPassengerCount = () => {
    setPassengerInfos({
      ...passengerInfos,
      count: passengerInfos.count === 1 ? 1 : passengerInfos.count - 1,
    });
  };

  const search = () => {
    let isOriginValid = origins.some((origin) => {
      return compareIgnoreCase(origin, selectedAirports.origin);
    });

    const isDestinationValid = destinations.some((destination) => {
      return compareIgnoreCase(destination, selectedAirports.destination);
    });

    if (!isOriginValid || !isDestinationValid) {
      setErrorMessage(
        <ErrorMessage
          isDestinationValid={isDestinationValid}
          isOriginValid={isOriginValid}
          validDestinationCities={destinations}
          validOriginCities={origins}
        />
      );
      return;
    }

    if (isDestinationValid && isOriginValid) {
      localStorageManager.setItem('queryData', {
        selectedAirports,
        passengerInfos,
      });
      navigate('/list');
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className={style.searchbar}>
        <input
          name="origin"
          onChange={handleChange}
          value={selectedAirports.origin}
          placeholder="Nereden"
        />
        <input
          name="destination"
          onChange={handleChange}
          value={selectedAirports.destination}
          placeholder="Nereye"
        />
        <div className={style.date}>
          <div>Tarih</div>
          <input type="date" />
        </div>
        <button
          className={style.passenger}
          data-passenger-count={passengerInfos.count}
          onClick={openPopover}
          aria-describedby={id}
        >
          <BoyIcon fontSize="large" />
        </button>
        <PassengerPicker
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePassengerPicker}
          defaultCabinType="economy"
          passengerCount={passengerInfos.count}
          incrementPassengerCount={incrementPassengerCount}
          decrementPassengerCount={decrementPassengerCount}
        />
        <button className={style.searchBtn} onClick={search} type="button">
          <RightIcon />
        </button>
      </div>
      <Dialog
        fullWidth
        maxWidth={'sm'}
        open={!!errorMessage}
        onClose={() => setErrorMessage(null)}
      >
        <DialogContent>{errorMessage}</DialogContent>
        <DialogActions>
          <Button onClick={() => setErrorMessage(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const ErrorMessage = ({
  isOriginValid,
  isDestinationValid,
  validOriginCities,
  validDestinationCities,
}) => {
  return (
    <>
      <DialogTitle sx={{ paddingLeft: '0' }}>Hata!</DialogTitle>
      {!isOriginValid && (
        <div style={{ marginBottom: '16px' }}>
          <DialogContentText>
            Lütfen geçerli bir kalkış noktası seçiniz.
          </DialogContentText>
          <DialogContentText>
            Geçerli noktalar: <b>{validOriginCities.toString()}</b>
          </DialogContentText>
        </div>
      )}
      {!isDestinationValid && (
        <div>
          <DialogContentText>
            Lütfen geçerli bir varış noktası seçiniz.
          </DialogContentText>
          <DialogContentText>
            Geçerli noktalar: <b>{validDestinationCities.toString()}</b>
          </DialogContentText>
        </div>
      )}
    </>
  );
};

export { Searchbar };
