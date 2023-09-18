import React from 'react'
import './DashboardSmallCard.css'
import { GoPeople } from 'react-icons/go'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { IoCallOutline } from 'react-icons/io5'
import { Paper } from '@mui/material'

const DashboardSmallCard = ({title, count, disc, iconName}) => {
    
    const iconComponents = {
        
        GoPeople: GoPeople,
        BiBriefcaseAlt2: BiBriefcaseAlt2,
        IoCallOutline: IoCallOutline
    };
  
    // Get the corresponding icon component based on the iconName prop
    const IconComponent = iconComponents[iconName];
  
    if (!IconComponent) {
      // Handle the case where an invalid icon name is provided
      return <div>Invalid Icon</div>;
    }

    

  return (
    
    <div  className="parrent col-lg col-12 p-2">
      <Paper elevation={2} className="dashboard-small-cards d-flex justify-content-around flex-column gap-1">

        <div className='d-flex align-items-center justify-content-between '>
        <h6>{title}</h6>
      <IconComponent 
        className='icon'
        size={40}
        color='#ffffff'
        />
        </div>
        <h2>{count}</h2>
        <p>{disc}</p>
      </Paper>
    </div>
  )
}

export default DashboardSmallCard