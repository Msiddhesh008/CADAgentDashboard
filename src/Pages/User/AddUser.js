import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Profile from './Images/profile_img.svg'
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import './User.css';
import crossIcon from './Images/x-circle.png'


const AddUser = ({ handleClose, open }) => {

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 0,
        p: 4,
        borderRadius: "5px"
    };

    const heading = {
        color: '#131313',
        fontFamily: 'Open Sans',
        fontSize: '14.247px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        textTransform: 'capitalize',
        marginBottom: '2.5rem'
    }

    const label = {
        color: '#131313',
        fontFamily: 'Open Sans',
        fontSize: '12.822px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        textTransform: 'capitalize',
        marginBottom: '8px' 
    }


    const customStyleInput = {
        backgroundColor: "#fff",
        width: '100%',
        '& input::placeholder': {
            fontSize: '16px', // Adjust the font size as needed
        }
    }

    const formControlLabelStyle = {
        "& .MuiFormControlLabel-label": {
            color: '#131313',
            fontFamily: 'Open Sans',
            fontSize: '11.397px',
            fontStyle: 'normal',
            fontEeight: 400,
            lineHeight: 'normal',
            textTransform: 'capitalize'
        }
    }


  return (
    <div>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ModalStyle}>
                  <img className='cross-icon' src={crossIcon} width={20} height={20} onClick={handleClose} />
                <div className='d-flex justify-content-center flex-column align-items-center gap-3'>
                    <img src={Profile} width={'90px'} height={'90px'} />
                      <p style={heading}>Upload profile picture</p>
                </div>
                <form>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <label style={label}>First Name</label>
                            <TextField
                                size='small'
                                style={customStyleInput}
                                variant="outlined"
                                required
                                inputProps={{
                                    style: {
                                        height: "18px",
                                    },
                                }}
                            />
                        </div>
                        <div className='col-6 mb-3'>
                            <label style={label}>last Name</label>
                            <TextField
                                size='small'
                                style={customStyleInput}
                                variant="outlined"
                                required
                                inputProps={{
                                    style: {
                                        height: "18px",
                                    },
                                }}
                            />
                        </div>
                        <div className='col-6 mb-3'>
                            <label style={label}>Email Address</label>
                            <TextField
                                type='email'
                                size='small'
                                style={customStyleInput}
                                variant="outlined"
                                required
                                inputProps={{
                                    style: {
                                        height: "18px",
                                    },
                                }}
                            />
                        </div>
                        <div className='col-6 mb-3'>
                            <label style={label}>Report Manager</label>
                            <TextField
                                size='small'
                                style={customStyleInput}
                                variant="outlined"
                                required
                                inputProps={{
                                    style: {
                                        height: "18px",
                                    },
                                }}
                            />
                        </div>
                        <div className='col-6 mb-3'>
                            <label style={label}>Phone Number</label>
                            <TextField
                                size='small'
                                style={customStyleInput}
                                variant="outlined"
                                required
                                inputProps={{
                                    style: {
                                        height: "18px",
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <label style={label}>Permission</label>
                        <div>
                            <FormControlLabel
                                value="Task"
                                control={
                                <Checkbox 
                                    sx={{
                                        color: '#4CCD8D',
                                        "&.Mui-checked": {
                                        color: '#4CCD8D',
                                        },
                                        "& .MuiSvgIcon-root": { fontSize: 18 },
                                    }}  
                                />}
                                label="Task"
                                labelPlacement="end"
                                sx={{ ...formControlLabelStyle }}
                                onChange={(e) => console.log(e.target.value)} 
                            />
                            <FormControlLabel
                                value="Client"
                                control={
                                    <Checkbox
                                        sx={{
                                            color: '#4CCD8D',
                                            "&.Mui-checked": {
                                                color: '#4CCD8D',
                                            },
                                            "& .MuiSvgIcon-root": { fontSize: 18 },
                                        }}
                                    />}
                                label="Client"
                                labelPlacement="end"
                                sx={{ ...formControlLabelStyle }}
                            />
                            <FormControlLabel
                                value="Form"
                                control={
                                    <Checkbox
                                        sx={{
                                            color: '#4CCD8D',
                                            "&.Mui-checked": {
                                                color: '#4CCD8D',
                                            },
                                            "& .MuiSvgIcon-root": { fontSize: 18 },
                                        }}
                                    />}
                                label="Form"
                                labelPlacement="end"
                                sx={{ ...formControlLabelStyle }}
                            />
                            <FormControlLabel
                                value="Form"
                                control={
                                    <Checkbox
                                        sx={{
                                            color: '#4CCD8D',
                                            "&.Mui-checked": {
                                                color: '#4CCD8D',
                                            },
                                            "& .MuiSvgIcon-root": { fontSize: 18 },
                                        }}
                                    />}
                                label="Form"
                                labelPlacement="end"
                                sx={{ ...formControlLabelStyle }}
                            />
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center mt-3'>
                        <div className='col-4'>
                            <Button
                                variant='contained'
                                className='button-contained'
                                type='submit'
                            >
                            Add
                            </Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Modal>
    </div>
  )
}

export default AddUser