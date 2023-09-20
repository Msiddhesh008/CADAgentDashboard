import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Paper, Typography } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const GenerateNewTickets = () => {
  return (
    <div className='p-4 h-75'>
      <span className='d-flex align-items-center gap-1'><ArrowBackIcon style={{color:"#292929"}}/><Typography style={{color:"#292929"}} variant='body1' >Generate New Tickets </Typography></span>

      <div className="row justify-content-center ms-3 me-3 mt-4 flex-lg-nowrap gap-4 h-100">
      <Paper className="col-lg-8 col-12 p-3">
        <h6>hello</h6>
      </Paper>


      <Paper className="col-lg-4 col-12">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th className='col-8 pb-3' >Ticket Details</th>
            <th className='text-end pb-3 pointer'><CreateOutlinedIcon style={{fontSize:"20px"}} /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='pb-1 text-small'>Issue / Query Type</td>
            <td className='pb-1 text-small'>- Claim</td>
          </tr>
          <tr>
            <td className='pb-1 text-small'>Contact Number</td>
            <td className='pb-1 text-small'>- 9895456215</td>
          </tr>
          <tr>
            <td className='pb-1 text-small'>Invoice Date / Purchase Date</td>
            <td className='pb-1 text-small'>- 05/08/2023</td>
          </tr>
          <tr>
            <td className='pb-1 text-small'>City</td>
            <td className='pb-1 text-small'>- Mumbai</td>
          </tr>
        </tbody>
      </table>
      </Paper>
      
      </div>
      
    </div>
  )
}

export default GenerateNewTickets