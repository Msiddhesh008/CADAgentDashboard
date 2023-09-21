import { Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const NewFeaturesComponent = () => {
  return (
    <Paper className='m-4 p-5 pt-5'>

      <div className="row mb-4">
      <div className='col-md-2 col-12 d-flex align-items-center gap-4'>
      <Typography variant='subtitle2'>Feature Name</Typography>

      </div>

      <div className='col-md-6 col-12 d-flex align-items-center gap-4'>

      <TextField 
      fullWidth 
      id="outlined-basic" 
      label="Feature" 
      variant="outlined" 
      size="small" />

      </div>
      </div>

      
      <div className="row">
      <div className='col-md-2 col-12 d-flex align-items-center gap-4'>
      <Typography variant='subtitle2'>Description</Typography>
      </div>
      
      <div className='col-md-6 col-12 d-flex align-items-center gap-4'>
      <TextField 
      multiline
      rows={4}
      fullWidth 
      defaultValue="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
      label="fullWidth" 
      id="Description" />
      </div>
      </div>

      
      
    </Paper>
  )
}

export default NewFeaturesComponent