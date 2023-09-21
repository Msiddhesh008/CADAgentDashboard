import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({ title, path, padding, fontSize, icon, variant }) => {


  return (<Link
          to={path}
        >
          <Button
            startIcon={icon ? icon : null}
            style={{
              padding: padding,
              backgroundColor: "#4CCD8D",
              textTransform: "none",
              fontSize: fontSize,
            }}
            variant={variant} className='primary-button text-light text-decoration-none w-100'>
            {title}
          </Button>
        </Link>
        )
}

export default PrimaryButton