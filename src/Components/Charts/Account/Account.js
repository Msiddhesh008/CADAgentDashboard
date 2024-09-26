import React from 'react'
import './Account.css'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Paper } from '@mui/material';

const Account = ({head,pera,btn}) => {
  return (
    <Paper square elevation={2} className='sec-card m-1 mb-4' style={{marginBottom:'30px',
        padding: '32px 22px 34px 30px',}}>
      <h2 style={{fontSize:'18px',fontWeight:'600',marginBottom:'20px'}}>{head}</h2>
      <p style={{fontSize:'16px',color:'#3F3F3F'}}>{pera}</p>
      <button style={{padding:'12px 17px',backgroundColor:'#4CCD8D',
       color:'#fff',border:'none',borderRadius:'5px',marginTop:'16px'}}>
        <FileDownloadOutlinedIcon style={{marginRight:'6px'}} />{btn}</button>
    </Paper>
  )
}

export default Account
