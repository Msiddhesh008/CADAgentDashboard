import React,{useState} from 'react'
import Account from '../../Components/Account/Account'
import Checkbox from '@mui/material/Checkbox';
import { Paper } from '@mui/material';
import './AccountsSecurity.css'
import AccountInner from '../../Components/Account/AccountInner';


const AccountsSecurity = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [ isCloseAccountOpen, setIsCloseAccountOpen ] = useState(true)

  const handleCloseAccount = ()=> {
     setIsCloseAccountOpen(!isCloseAccountOpen)
    }

  return (
    <div className='m-4 account-sec overflow-auto'>
      
      {isCloseAccountOpen?
        <div>
          <Account
            head='Export contact and companies'
            pera='Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the dummy text of the printing and typeSettings industry. Lorem Ipsum has been the '
            btn='Download .xlsx file '/>
          <Account
            head='Export uploaded files'
            pera='Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the dummy text of the printing and typeSettings industry. Lorem Ipsum has been the '
            btn='Download .zip file  '/>
          <Paper square elevation={2} className='devices  m-1' style={{display:'flex',alignItems:'baseline',padding:'23px 22px 22px 18px'}}>
            <Checkbox style={{position:'relative',top:'6px',marginRight:'8px'}}
              {...label}
              sx={{
                color:'#4CCD8D',
                '&.Mui-checked': {
                  color: '#4CCD8D',
                },
              }}
            />
            <div>
              <h4 style={{fontSize:'18px',fontWeight:'600'}}>Sign out from all devices</h4>
              <p style={{fontSize:'12px'}}>Logged in on a shared device but forgot to sign out? End all sessions by signing out from all devices.</p>
            </div>
          </Paper>
          <div style={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'5rem'}}>
            <button 
            onClick={handleCloseAccount}
            style={{border:'none',color:'#fff',backgroundColor:'#DE5753',padding:'11px 98px',fontSize:'18px',borderRadius:'5px'}}>
              Close Account</button>
          </div>
        </div>
      :<AccountInner handleCloseAccount={handleCloseAccount} />}
      
    </div>
  )
}

export default AccountsSecurity