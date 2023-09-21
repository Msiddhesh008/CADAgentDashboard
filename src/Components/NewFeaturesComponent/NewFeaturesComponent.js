import { Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const NewFeaturesComponent = () => {
  return (
    <Paper className='m-4 p-4 pt-5 row flex-column gap-5'>
      <div className='col-md-7 col-12 d-flex align-items-center gap-4'>
      <Typography variant='subtitle2'>Feature Name</Typography>
      <TextField 
      sx={{
        width:"80%"
      }}
      id="outlined-basic" 
      label="Feature" 
      variant="outlined" 
      size="small" />
      </div>

      
      <div className='col-md-7 col-12 d-flex align-items-center gap-4'>
      <Typography variant='subtitle2'>Description</Typography>
      

      
        <TextField
      sx={{
        width:"80%"
      }}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          defaultValue="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        />
      </div>
    </Paper>
  )
}

export default NewFeaturesComponent