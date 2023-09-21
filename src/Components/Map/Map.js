import React from 'react'
import './Map.css'
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import map from '../../Images/map.svg'

const Map = () => {

  
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#548CFF",
    color: '#ffffff',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));



  return (
    <Paper elevation={2} className='map '>
      
      <LightTooltip title="Hover on Countries">
      <img 
      style={{
        objectFit:"cover",
        width:"100%",
        height:"auto"
      }}
      src={map} alt="" />
      </LightTooltip>
    </Paper>
  )
}

export default Map