import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import style from './PassengerPicker.module.scss';

const PassengerPicker = ({
  open,
  id,
  anchorEl,
  onClose,
  defaultCabinType,
  passengerCount,
  incrementPassengerCount,
  decrementPassengerCount,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Typography component={'div'} sx={{ p: 2 }}>
        <div className={style.content}>
          <div>Kabin ve yolcu seçimi</div>
          <FormControl>
            <RadioGroup
              aria-labelledby="radio-buttons"
              defaultValue={defaultCabinType}
              name="radio-buttons-group"
              row
            >
              <FormControlLabel
                value="economy"
                control={<Radio />}
                label="Economy Class"
              />
              <FormControlLabel
                value="business"
                control={<Radio />}
                label="Business Class"
              />
            </RadioGroup>
          </FormControl>
          <div className={style.changePassengerCount}>
            <div>Yolcu</div>
            <div className={style.incrementDecrement}>
              <button type="button" onClick={decrementPassengerCount}>
                -
              </button>
              <div>{passengerCount}</div>
              <button type="button" onClick={incrementPassengerCount}>
                +
              </button>
            </div>
          </div>
        </div>
      </Typography>
    </Popover>
  );
};

export default PassengerPicker;
