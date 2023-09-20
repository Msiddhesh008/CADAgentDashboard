import { Button, InputAdornment, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton'
import { ImTicket } from 'react-icons/im';
import CheckTicketModal from '../CheckTicketModal/CheckTicketModal';
import GenerateNewTickets from '../GenerateNewTickets/GenerateNewTickets'


const SupportComponent = ({handleChange}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [ generateTicketsScreen, setGenerateTicketsScreen ] = useState(false)


  return (
    generateTicketsScreen ? (
      <GenerateNewTickets />
    ) : (
      <Paper className='pt-5 pb-5 ps-3 d-flex flex-column h-100' square>
        <TextField
          startadornment={
            <InputAdornment position="start">
              <ImTicket />
            </InputAdornment>
          }
          size='small'
          sx={{
            backgroundColor: "#F4F4FE",
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove the border
            },
            'label': {
              fontSize: '16px', // Adjust the font size as needed
            },
          }}
          className='col-11 col-md-7 text-small'
          id="outlined-basic"
          label="🔍 Enter your search item here"
          variant="outlined"
        />
        <div className="col-11 col-md-7 mt-5 d-flex justify-content-between">
          <div 
          onClick={() => setGenerateTicketsScreen(!generateTicketsScreen)}
          style={{ width: "48%" }} 
          className="pt-4">
            <PrimaryButton
              variant="contained"
              icon={<ImTicket />}
              title="Generate New Tickets"
              path="/support"
              padding="0.5rem 2rem"
            />
          </div>
          <div style={{ width: "48%" }} className="pt-4">
            <Button
              onClick={handleOpen}
              sx={{
                width: "100%",
                borderColor: "#4CCD8D",
                color: "#4CCD8D",
                textTransform: "none",
                padding: "0.5rem 2rem"
              }}
              color="success"
              variant="outlined"
            >
              Check Ticket Status
            </Button>
          </div>
        </div>
        <CheckTicketModal open={open} setOpen={setOpen} />
      </Paper>
    )
  );
  

  
}

export default SupportComponent