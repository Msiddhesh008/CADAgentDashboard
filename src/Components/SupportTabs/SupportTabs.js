import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';

export default function SupportTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper style={{
        width: "100%"
    }} elevation={0} square>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Support" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
        <Tab label="FAQ'" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
        <Tab label="New Features Request" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
        <Tab label="Help & Guid" style={{ width: '25%', textTransform: 'none', fontSize:"16px" }} />
      </Tabs>
    </Paper>
  );
}