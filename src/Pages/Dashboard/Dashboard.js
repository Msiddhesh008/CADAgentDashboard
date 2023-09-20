import React from 'react'
import './Dashboard.css'
import PrimaryButton from '../../Components/PrimaryButton';
import DashboardSmallCard from '../../Components/DashboardSmallCard.js/DashboardSmallCard';
import LineChart from '../../Components/Charts/LineCart/LineChart';
import Doughnut from '../../Components/Charts/DoughnutChart/Doughnut';
import Map from '../../Components/Map/Map';
import { Alert, Paper } from '@mui/material';




const Dashboard = () => {


  return (
    <div className='dashboard pb-1 m-2 overflow-auto  align-items-start w-85 row p-0 h-auto rounded-2 fs-2 fw-bold text-white'>

    <div className="upgrade-plan-card-parrent col-lg-4 col-12 p-2">
      <Paper elevation={2} className="upgrade-plan-card justify-content-between d-flex flex-column w-100 ">

        {/* <div className="upgrade-plan-card-warning d-flex justify-content-start gap-2 align-items-center p-2 w-100">
          <PiWarningBold
          color='#D79C00'
          size={26}
          />
          <span 
          className='fs-6 fw-400 text-small'>Your free trial will expire in 20 days</span>

        </div> */}
        
      <Alert severity="warning">Your free trial will expire in 20 days</Alert>

        <div className="upgrade-plan-card-details pb-3 d-flex justify-content-evenly">

          <div className='d-flex flex-column justify-content-center'>
            <span className='text-secondary text-small'>Status</span>
            <p className='text-dark text-small'>Active</p>
          </div>

          <div className='d-flex flex-column justify-content-center'>
            <span className='text-secondary text-small'>Next Billing date</span>
            <p className='text-dark text-small'>11-07-23</p>
          </div>


          <div className='d-flex flex-column justify-content-center'>
            <span className='text-dark fw-bold fs-4'>$150/m</span>
            <PrimaryButton 
            fontSize="10px"
            path="upgrade-plan"
            padding="0.2rem 1rem"
            title="Upgrade Now"
            />
          </div>
        </div>



      </Paper>
    </div>
    

      {/* =========[ small-cards-begin ]========= */}
      <DashboardSmallCard
      iconName='GoPeople'
      title="Users" 
      count={`${50}k`}
      disc="Lorem ipsum dolor sit ame"
      />
      <DashboardSmallCard
      iconName='BiBriefcaseAlt2'
      title="Company" 
      count={10}
      disc="Lorem ipsum dolor sit ame"
      />
      <DashboardSmallCard
      iconName='IoCallOutline'
      title="Contacts" 
      count={80}
      disc="Lorem ipsum dolor sit ame"
      />
      {/* =========[ small-cards-end ]========= */}




      
      <div  className="col-lg-6 col-12 p-2">
        <LineChart />
      </div>
      
      <div  className="col-lg-6 col-12 p-2 ">
        <Doughnut/>
      </div>

      <div className="col-12 p-2">
        <Map />
        
      </div>
    </div>
  )
}

export default Dashboard