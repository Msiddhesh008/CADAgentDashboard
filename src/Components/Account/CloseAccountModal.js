import React from 'react'
import Modal from '@mui/material/Modal';
import { Button, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



const CloseAccountModal = ({handleCloseAccount, setOpen, open}) => {
    const handleClose = () => setOpen(false);


return (
    <div>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            p: 2,
            pt:0
            }}>
             
            <div className='modalhead'>
                {/* <h2></h2> */}
                <h3 onClick={handleClose} className='text-end pb-3 pointer'><CloseIcon/></h3>
            </div>
            <div className='modalbody'>
                <h2 style={{fontSize:'24px',textAlign:'center',marginBottom:'50px'}}>Are you sure you want to <br/>close your account? </h2>
                <div style={{textAlign:'center',marginBottom:'3rem'}}>
                    <Button style={{background:'#fff',border:'1px solid #4CCD8D',width:'180px',height:'40px',borderRadius:'4px',marginRight:'10px', color:"#4CCD8D"}}>Yes</Button>
                    <Button onClick={handleCloseAccount} style={{background:'#4CCD8D',border:'none',width:'180px',height:'40px',borderRadius:'4px', color:'#fff'}}>No</Button>
                </div>
            </div>
          </Paper>
      </Modal>
    </div>
  )
}

export default CloseAccountModal
