import React,{useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Button, Paper } from '@mui/material';
import CloseAccountModal from './CloseAccountModal';

const AccountInner = ({handleCloseAccount}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <>
        <Paper square elevation={2} className='accouts-sec m-1 p-4 pt-4 pb-5'>
            <div className='form-group mb-4'>
                <label style={{fontSize:'18px',fontWeight:'600',marginBottom:'10px'}}>Why are you leaving?</label><br/>
                <input type='text' placeholder='Answer' style={{border:'1px solid #ABABAB',width:'100%',height:'50px',borderRadius:'5px',paddingLeft:'15px'}} />
            </div>
            <div className='form-group'>
                <label style={{fontSize:'18px',fontWeight:'600',marginBottom:'10px'}}>How may we help to improve our services if you choose to stay/continue?</label><br/>
                <input type='text' placeholder='Answer' style={{border:'1px solid #ABABAB',width:'100%',height:'50px',borderRadius:'5px',paddingLeft:'15px'}} />
            </div>
            <div style={{display:'flex',alignItems:'baseline',paddingTop:'24px'}}>
                <Checkbox style={{position:'relative',top:'6px',marginRight:'10px', padding:'0px'}}
                        {...label}
                        sx={{
                        color:'#4CCD8D',
                        '&.Mui-checked': {
                            color: '#4CCD8D',
                        },
                        }}
                />
                <p style={{fontSize:'16px', fontWeight:'600'}}>How may we help to improve our services if you choose to stay/continue?</p>
            </div>
        </Paper>
        <div style={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'5rem'}}>
            <Button 
             onClick={handleOpen}
            style={{border:'none',color:'#fff',backgroundColor:'#DE5753',padding:'11px 98px',fontSize:'18px',borderRadius:'5px', height:"40px", textTransform:"none"}}>
            Close Account</Button>
        </div>
        <CloseAccountModal setOpen={setOpen} open={open} handleCloseAccount={handleCloseAccount}/>
    </>
  )
}

export default AccountInner
