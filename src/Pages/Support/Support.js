import React from 'react'
import "./Support.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import SupportComponent from '../../Components/SupportComponent/SupportComponent';
import FAQ from '../../Components/FAQ/FAQ';
import NewFeaturesComponent from '../../Components/NewFeaturesComponent/NewFeaturesComponent'
import HelpComponent from '../../Components/HelpComponent/HelpComponent'

const Support = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='support w-100 h-100 d-flex flex-column '>
    <Paper style={{
        width: "100%"
    }} elevation={0} square>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Support" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
        <Tab label="FAQ's" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
        <Tab label="New Features Request" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
        <Tab label="Help & Guid" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
      </Tabs>
    </Paper>

    
    {value === 0 && <SupportComponent />} {/* Render SupportComponent when the first tab is selected */}
    {value === 1 && <FAQ />} {/* Render FAQsComponent when the second tab is selected */}
    {value === 2 && <NewFeaturesComponent />} {/* Render NewFeaturesComponent when the third tab is selected */}
    {value === 3 && <HelpComponent />} {/* Render HelpComponent when the fourth tab is selected */}

      
    </div>
  )
}

export default Support