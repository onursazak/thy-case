import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

const PromotionCodeSwitch = ({ enablePromotionCode, onChange }) => {
  return (
    <div>
      <FormControlLabel
        value="start"
        control={
          <Switch
            color="primary"
            checked={enablePromotionCode}
            onChange={onChange}
          />
        }
        label="Promosyon Kodu"
        labelPlacement="start"
        sx={{
          margin: '16px 0 0 0',
          fontWeight: 'bold',
          fontSize: '18px',
          '.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label': {
            fontSize: '18px',
            fontWeight: 'bold',
          },
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '16px',
          fontSize: '12px',
        }}
      >
        <Typography>
          Promosyon Kodu Seçeneği ile tüm Economy kabini Eco Fly paketlerini %50
          indirimle satın alabilirsiniz.
        </Typography>
        <Typography>
          Promosyon Kodu Seçeneği aktifken Eco Fly paketi haricinde seçim
          yapılamamaktadır.
        </Typography>
      </div>
    </div>
  );
};

export default PromotionCodeSwitch;
