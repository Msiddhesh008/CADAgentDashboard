import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import './AddTag.css'
import PrimaryButton from '../PrimaryButton'
import AddIcon from '@mui/icons-material/Add';

const AddTag = ({handleAdd}) => {
  return (
    <Paper className='w-100 p-4'>
        <div className="row">
        <div className='col-md-10 col-12'>
            <Typography variant='h6' className='mb-2'>Tags</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.</Typography>
        </div>

        <div className="col-5">
            <Typography variant='subtitle2' className='mb-2 mt-3 typography' >Name</Typography>
            <input type="Name" />
        </div>
        <div className="col-6 ">
            <Typography variant='subtitle2' className='mb-3 mt-3' >Value</Typography>

            <div className='d-flex gap-3 align-items-center'>
            <input type="Value" />
            <AddIcon
            onPress={handleAdd}
            style={{
                width:"40px",
                height:"40px",
                backgroundColor:"#4CCD8D",
                color:"#fff",
                padding:"6px",
                borderRadius:"50%",
                cursor:"pointer"
            }}
            />
            </div>
        </div>
        </div>

        <div className="row justify-content-center align-items-center mt-5">
        <div className="col-3 d-flex justify-content-between align-items-center">
        <Button
              sx={{
                width: "100%",
                borderColor: "#4CCD8D",
                color: "#4CCD8D",
                textTransform: "none",
                padding: "0.5rem 2rem"
              }}
              color="success"
              variant="outlined"
            >
              Cancle
            </Button>
        </div>
        <div className="col-3 ">
            <PrimaryButton
            padding="0.5rem 2rem"
            title={"Save Changes"}
            />
        
        </div>
        </div>
        
    </Paper>
  )
}

export default AddTag