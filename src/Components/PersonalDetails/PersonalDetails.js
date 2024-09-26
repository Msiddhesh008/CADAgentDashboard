import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import GlobalStateContext from '../../Contexts/GlobalStateContext';
import { ToastContainer, toast } from 'react-toastify';

const schema = yup.object().shape({
  firstName: yup.string()
  .matches(/^[A-Za-z]+$/, 'First Name can only contain letters')
  .min(2, 'First Name must be at least 2 letters')
  .required('First Name is required'),
  lastName: yup.string()
  .matches(/^[A-Za-z]+$/, 'Last Name can only contain letters')
  .min(2, 'Last Name must be at least 2 letters')
  .required('Last Name is required'),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
    .required('Phone Number is required'),
  email: yup.string().email('Invalid email').required('Email Address is required'),
});

const PersonalDetails = () => {
  const { profileDetails, setProfileDetails } = useContext(GlobalStateContext);
  const { handleSubmit, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(formState);



    const notifySucess = () => toast.success("Profile Updated Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      const onSubmit = (formData) => {
        const mergedData = {
          ...profileDetails,
          ...formData,
        };
        setProfileDetails(mergedData);
        reset();
        notifySucess();
      };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='d-flex p-4 flex-wrap mt-4 pt-4 gap-4 justify-content-center w-100'
    >
      <div className='col-md-5 col-12'>
        <Controller
          name='firstName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              className='text-small'
              label='First Name'
              id='outlined-size-small'
              size='small'
              type='text'
              fullWidth
              required
              error={!!formState.errors.firstName}
              helperText={formState.errors.firstName?.message}
            />
          )}
        />
      </div>
      <div className='col-md-5 col-12'>
        <Controller
          name='lastName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Last Name'
              id='outlined-size-small'
              size='small'
              type='text'
              fullWidth
              required
              error={!!formState.errors.lastName}
              helperText={formState.errors.lastName?.message}
            />
          )}
        />
      </div>
      <div className='col-md-5 col-12'>
        <Controller
          name='mobile'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Phone Number'
              id='outlined-size-small'
              size='small'
              type='tel'
              fullWidth
              required
              error={!!formState.errors.mobile}
              helperText={formState.errors.mobile?.message}
            />
          )}
        />
      </div>
      <div className='col-md-5 col-12'>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Email Address'
              id='outlined-size-small'
              size='small'
              type='email'
              fullWidth
              required
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
            />
          )}
        />
      </div>

      <div className='col-12  col-md-7 gap-4  mt-2 d-flex flex-wrap justify-content-center'>
        <div className='pt-4 col-12 col-md-5 d-flex justify-content-center align-items-center'>
          <Button className='button-outlined' variant='outlined'>
            Cancel
          </Button>
        </div>

        <div className='pt-4 col-12 col-md-5  d-flex justify-content-center align-items-center'>
          <Button
            className='button-contained'
            type='submit'
            variant='contained'
          >
            Update
          </Button>
        </div>
      </div>
      <ToastContainer 
    style={{
      fontSize:"14px"
    }}
    />
    </form>
  );
};

export default PersonalDetails;
