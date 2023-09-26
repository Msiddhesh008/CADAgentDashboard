import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper } from '@mui/material';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

export default function BasicModal({setOpen, open}) {
  const handleClose = () => setOpen(false);

  return (
      
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper 
      className="d-flex justify-content-center align-items-center gap-5 flex-column"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 5,

      }}>
        
        <Typography className="text-center position-relative" id="modal-modal-title" variant="h5" component="h2">
          Are You sure you want to logout?
          
      <CancelTwoToneIcon
      onClick={handleClose} 
      style={{
        position:"absolute",
        right:"-20px",
        top:"-26px",
        cursor:"pointer"

      }}
      />
        </Typography>

        <div className="row w-100">
        <div className="col-6">
        <Button
        className="button-outlined"
        variant="outlined"
        >No</Button>
        </div>

        <div className="col-6">
        <Button
        className="button-contained"
        variant="contained"
        >Yes</Button>
        </div>
        </div>
      </Paper>
    </Modal>
  );
}