import { Paper, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import './Subscription.css'
import PrimaryButton from '../../Components/PrimaryButton';
import User from './Images/users.png'

const Subscription = () => {

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: '100%',
    // padding: theme.spacing(2),
  }));


  return (
    <div className='p-4'>
      <div className='row'>
        <div className='col-4'>
          <DemoPaper variant="elevation">
            <div className='p-2 card1-bg'>
              <label className='mb-1 card-font1'>Current Plan</label>
              <div className='row d-flex align-items-center justify-content-between'>
                <div className='col-6 text-left'>
                  <label className='card-font2'>Startup ( Monthly )</label>
                </div>
                <div className='col-6 text-end'>
                  <label className='card-font3'>$ 65.40 / mo </label>
                </div>
              </div>
            </div>
            <div className='pt-2 ps-2 pe-2 pb-3'>
              <div className='row'>
                <div className='col-12 text-left'>
                  <label className='card-font4 mb-4'>Started On : 09/10/2023</label>
                </div>
              </div>
              <div className='row'>
                <div className='col-5'></div>
                <div className='col-7 text-left'>
                  <PrimaryButton
                    variant="contained"
                    title="Upgrade/Downgrade"
                    padding="0.3rem 0.3rem"
                    fontSize="14px"
                  />
                </div>
              </div>
              
            </div>
          </DemoPaper>
          
        </div>
        <div className='col-4'>
          <DemoPaper variant="elevation">
            <div className='p-3'>
              <div className='d-flex justify-content-start align-items-center gap-2 mb-2'>
                <img src={User} width={20} height={20} />
                <label className='card-font2'>Users</label>
              </div>
              <label className='text-start card-font4 card-font-color3'>Maximum users unlimited</label>
            </div>
            <div className='ps-3 pe-3 pt-2 pb-2'>
              <div className='row'>
                <div className='col-5 mb-2'>
                  <label className='card-font5 card-font-color1'>Employees</label>
                </div>
                <div className='col-7 mb-2'>
                  <label className='card-font1 card-font-color3'>: 5</label>
                </div>
                <div className='col-5'>
                  <label className='card-font5 card-font-color1'>External Users</label>
                </div>
                <div className='col-7'>
                  <label className='card-font1 card-font-color3'>: 1</label>
                </div>
              </div>
            </div>
            
          </DemoPaper>

        </div>
        <div className='col-4'>
          <DemoPaper variant="elevation">
            <div className='row'>
              <div className='col-6'>
                ji
              </div>
              <div className='col-6'>
                ji
              </div>
            </div>
          </DemoPaper>

        </div>
        
      </div>
    </div>
  )
}

export default Subscription