import style from './FareCategory.module.scss';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';

const FareCategory = ({
  category,
  categoryInfo,
  onClick,
  selectedFareInputId,
  index,
}) => {
  const inputId = `${category}-${index}`;
  return (
    <div className={style.fareCategory}>
      <Radio
        checked={selectedFareInputId === inputId}
        onChange={(event) => onClick(event.target.value, inputId)}
        value={category}
        name={`radio-buttons`}
        inputProps={{ 'aria-label': category }}
      />
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        sx={{ fontSize: '12px', marginRight: '12px' }}
      >
        {category}
      </FormLabel>
      <div>
        <div>Yolcu başına</div>
        <div>
          {categoryInfo.subcategories[0].price.currency}{' '}
          {categoryInfo.subcategories[0].price.amount}
        </div>
      </div>
    </div>
  );
};

export { FareCategory };
