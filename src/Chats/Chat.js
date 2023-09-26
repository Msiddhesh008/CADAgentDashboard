import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChatsLeft from '../Components/Chat/ChatsLeft'
import ChatsRight from '../Components/Chat/ChatsRight';

const Chat = () => {
  return (
    <Paper elevation={2} className='chatpage m-3 w-85  p-2'>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ChatsLeft/>
        </Grid>
        <Grid item xs={9} >
          <div style={{borderLeft:'1px solid #0000002b',marginLeft:'15px'}}>
            <ChatsRight/>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Chat