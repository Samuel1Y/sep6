import React from 'react'
import Button from '@mui/material/Button'

import { ButtonProps } from './Types'

export const DefaultButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  sx,
}) => (
  <Button
    variant='contained'
    onClick={onClick}
    disabled={disabled}
    sx={{
      backgroundColor:'#1976d2',
      color:'white',
      boxShadow:'inherit',
        fontSize: {
          xs: '0.6rem',
          sm: '0.8rem',
          md: '1.5rem',
        },
        textAlign: 'center',
        textTransform: 'uppercase',
        margin: '1rem auto',
        height: '3rem',
        width: 'auto',
        minWidth: '10rem',
        ':hover': {
          backgroundColor:'#1469BD',
        },
        '&.Mui-disabled': {
          opacity:'.4',
        },
        ...sx,
      }}
  >
    {label}

  </Button>
)
