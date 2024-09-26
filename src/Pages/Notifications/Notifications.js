import React from 'react'
import Switch from '@mui/material/Switch';
import { Paper } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Notifications = () => {
  return (
    <Paper className=' m-3 w-85 h-100 p-3'>
      <div className='pb-2 mb-2' style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #EBEBEB'}}>
        <p style={{marginBottom:'0'}}>Notify users or clients by email for each task activity?</p>
        <Switch {...label} defaultChecked />
      </div>
      <div className='pb-2 mb-2' style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #EBEBEB'}}>
        <p style={{marginBottom:'0'}}>Notify users or clients by SMS for each task activity?</p>
        <Switch {...label} defaultChecked />
      </div>
      <div className='pb-2 mb-2' style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #EBEBEB'}}>
        <p style={{marginBottom:'0'}}>Notify users or clients by toast notification for each task activity?</p>
        <Switch {...label} defaultChecked />
      </div>
    </Paper>
  )
}

export default Notifications
