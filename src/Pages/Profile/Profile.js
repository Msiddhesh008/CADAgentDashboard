import { Avatar, Paper, Tab, Tabs, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';

import ChangePasword from '../../Components/ChangePasword/ChangePasword';
import GlobalStateContext from '../../Contexts/GlobalStateContext';
import PersonalDetails from '../../Components/PersonalDetails/PersonalDetails';

const Profile = () => {
  const { profileDetails, setProfileDetails } = useContext(GlobalStateContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileDetails({
          ...profileDetails,
          profilePic:event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Paper 
    // data-aos="fade-down-left"
    elevation={2} className='m-3 w-85 h-100 flex-column rounded-2 d-flex justify-content-start align-items-start fs-2 fw-bold'>
      <div className='pro-cnt w-100 d-flex justify-content-start gap-3 p-4'>
        <div
          style={{
            position: 'relative',
          }}
        >
          <Avatar
            className='m-1'
            style={{
              width: '100px',
              height: '100px',
              border: '4px solid #E9E9E9',
            }}
            alt='Remy Sharp'
            src={profileDetails.profilePic}
          />

          <input
            type='file'
            id='profile-image-input'
            accept='image/*'
            style={{
              display: 'none',
            }}
            onChange={handleImageChange}
          />

          <label 
          style={{
              position: 'absolute',
              bottom: '1rem',
              right: '0.2rem',
              height: '30px',
              width: '30px',
              backgroundColor: '#E9E9E9',
              padding: '4px',
              borderRadius: '50%',
              cursor: 'pointer',
          }}
          htmlFor='profile-image-input'>
            <CameraAltTwoToneIcon
            sx={{
              position: 'absolute',
              bottom: '0rem',
              right: '0rem',
              height: '30px',
              width: '30px',
              backgroundColor: '#E9E9E9',
              padding: '4px',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            />
          </label>
        </div>
        <div className='pro-details d-flex justify-content-center flex-column'>
          <Typography className='fw-bold' variant='subtitle1'>
            {profileDetails.firstName} {profileDetails.lastName}
          </Typography>
          <Typography className='text-grey' variant='subtitle2'>
            {profileDetails.mobile}
          </Typography>
          <Typography className='text-grey' variant='subtitle2'>
            {profileDetails.email}
          </Typography>
        </div>
      </div>
      <Paper style={{
        width: "100%"
    }} elevation={0} square>
      
      <Tabs value={value} onChange={handleChange} start="true">
        <Tab className='ms-4' label="Personal Details" style={{ width: '20%', textTransform: 'none', fontSize:"14px" }} />
        <Tab label="Change Password" style={{ width: '20%', textTransform: 'none', fontSize:"14px" }} />
      </Tabs>
    </Paper>

    
    {value === 0 && <PersonalDetails />} 
    {value === 1 && <ChangePasword />} 
    </Paper>
  );
};
export default Profile
