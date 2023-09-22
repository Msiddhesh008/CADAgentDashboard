import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({ title, path, padding, fontSize, icon, variant, onClick }) => {


  return (<Link
          to={path}
          className='d-flex justify-content-between align-items-center text-decoration-none'
        >
          <Button
            onClick={onClick}
            startIcon={icon ? icon : null}
            style={{
              border:"1px solid #4CCD8D",
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