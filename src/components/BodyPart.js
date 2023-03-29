import React from 'react';
import { Stack, Typography } from '@mui/material';
import all from '../assets/parts/all.png';
import back from '../assets/parts/back.png';
import cardio from '../assets/parts/cardio.png';
import chest from '../assets/parts/chest.png';
import ll from '../assets/parts/ll.png';
import ul from '../assets/parts/ul.png';
import ua from '../assets/parts/ua.png';
import la from '../assets/parts/la.png';
import neck from '../assets/parts/neck.png';
import waist from '../assets/parts/waist.png';
import shoulder from '../assets/parts/shoulder.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      {item === 'all' &&
        <img src={all} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'back' &&
        <img src={back} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'cardio' &&
        <img src={cardio} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'chest' &&
        <img src={chest} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'lower arms' &&
        <img src={la} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'lower legs' &&
        <img src={ll} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'neck' &&
        <img src={neck} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'shoulders' &&
        <img src={shoulder} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'upper arms' &&
        <img src={ua} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'upper legs' &&
        <img src={ul} alt={item} style={{ width: '40px', height: '40px' }} />
      }
      {item === 'waist' &&
        <img src={waist} alt={item} style={{ width: '40px', height: '40px' }} />
      } 
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
};

export default BodyPart;
