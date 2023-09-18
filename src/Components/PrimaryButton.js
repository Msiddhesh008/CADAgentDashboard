import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({title, path, padding, fontSize}) => {


  return (<Link 
    to={path}
    >
    <Button 
    style={{
      padding: padding,
      backgroundColor:"#4CCD8D",
      textTransform:"none",
      fontSize:fontSize,
    }}
    variant="contained" className='primary-button text-decoration-none '>
      {title}
    </Button>
    </Link>)
}

export default PrimaryButton