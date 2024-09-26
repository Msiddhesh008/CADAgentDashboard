import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const notifyError = () => toast.error("Password didnt matched !", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const notifySucess = () => toast.success("Password changed!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      notifyError()
    }else{
      notifySucess()
      setOldPassword("")
      setNewPassword("")
      setConfirmPassword("")
    }

  };

  return (
    
      <form onSubmit={handleSubmit} className='d-flex p-4 flex-wrap mt-4 pt-4 gap-4 justify-content-center w-100'>
        
        <div className="col-md-3 col-12 ">
          <TextField
            className='text-small'
            label="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            id="outlined-size-small-old" // Unique id
            size="small"
            type='password'
            fullWidth
            required
          />
        </div>

        <div className="col-md-3 col-12">
          <TextField
            className='text-small'
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id="outlined-size-small-new" // Unique id
            size="small"
            type='password'
            fullWidth
            required
          />
        </div>

        <div className="col-md-3 col-12">
          <TextField
            className='text-small'
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="outlined-size-small-confirm" // Unique id
            size="small"
            type='password'
            fullWidth
            required
          />
        </div>
        
        <ToastContainer 
        style={{
          fontSize:"14px"
        }}
        />
        <div className="col-md-3 col-12">
        <Button 
        className='button-contained'
        variant="contained" 
        type="submit">Change Password</Button>
        </div>
      </form>
  );
};

export default ChangePassword;
