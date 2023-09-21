import React from 'react'
import { Button } from '@mui/material'

const SecondaryButton = ({ title, icon, padding, fontSize, onClick }) => {
  return (
      <Button 
        onClick={onClick}
        variant="text"
        startIcon={icon ? icon : null}
        sx={{
            width: "100%",
            fontSize: fontSize,
            borderColor: "#4CCD8D",
            color: "#000",
            textTransform: "none",
            backgroundColor: '#E2ECFF',
            padding: padding,
            '&:hover': {
                backgroundColor: '#E2ECFF !important', // Color when hovered
            }
        }
    } 
      >{title}
      </Button>
  )
}

export default SecondaryButton