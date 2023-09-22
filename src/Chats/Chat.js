import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChatsLeft from '../Components/Chat/ChatsLeft'
import ChatsRight from '../Components/Chat/ChatsRight';

const Chat = () => {
  return (
    <Paper elevation={2} className='m-3 w-85 h-100 p-2'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChatsLeft/>
        </Grid>
        <Grid item xs={8}>
          <ChatsRight/>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Chat