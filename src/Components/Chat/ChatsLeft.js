import React, { useContext, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Chats.css';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import GlobalStateProvider from '../../Contexts/GlobalStateProvider';


const ChatsLeft = () => {
    const { IndividualArray, setIndividualArray } = useContext(GlobalStateProvider)

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered style={{height:'40px',borderBottom:'1px solid 1px solid #0000002b'}}>
        <Tab icon={<PermIdentityOutlinedIcon/>} label="Individual" style={{ width: '50%', textTransform: 'none', fontSize:"14px",display:'block',fontWeight:'700',fontFamily: 'inherit',padding: '12px 5px' }}  />
        <Tab icon={<PeopleAltOutlinedIcon/>} label="Group" style={{ width: '50%', textTransform: 'none', fontSize:"14px",display:'block',fontWeight:'700',fontFamily: 'inherit',padding: '12px 5px' }} />
      </Tabs>
      <div className='searchbox'>
          <SearchIcon />
          <input placeholder='Search...'  type='search'/>
      </div>
      <p style={{fontSize:'14px',fontWeight:'600'}}>Frequent Contact</p>
          <div className='active-profile'>
              {IndividualArray.map((message,i) => (
                <div key={i} className='' style={{display:'flex',position:'relative',marginRight:'15px'}}>
                  <div className='contact-profile' style={{position:'relative'}}>
                    <img src={message.image} alt='img' style={{ height: '40px', width: '40px', borderRadius: '50%' }}/>
                    <span style={{width:'10px',height:'10px',borderRadius:'20px',backgroundColor:'#4CCD8D',display:'flex',position:'relative',bottom:'10px',left:'30px'}}></span>
                  </div>
                </div>
              ))}
        </div>
        {value === 0 && 
            <div className='mess' style={{overflowY:'scroll',height:'238px'}}>
             {IndividualArray.map((message,i) => (
                <div key={i} className='message mt-4' style={{display:'flex',position:'relative'}}>
                  <div className='contact-profile' style={{position:'relative'}}>
                    <img src={message.image} alt='img' style={{ height: '40px', width: '40px', borderRadius: '50%' }}/>
                    <span style={{width:'10px',height:'10px',borderRadius:'20px',backgroundColor:'#4CCD8D',display:'flex',position:'relative',bottom:'10px',left:'30px'}}></span>
                  </div>
                  <div style={{marginLeft:'15px'}}>
                    <h4 style={{fontSize:'14px',fontWeight:'700'}}>{message.name}</h4>
                    <p style={{fontSize:'12px'}}>{message.message}</p>
                  </div>
                  <div style={{position:'absolute',right:'0',top:'0'}}>
                    <p style={{fontSize:'10px',fontWeight:'700',bottom:'10px',position:'relative'}}>{message.day}</p>
                    <span style={{position:'absolute',right:'0',bottom:'-8px',fontSize:'8px',background:'#548CFF',padding:'2px 7px',
                    borderRadius:'10px',color:'#fff'}}>{message.mess}</span>
                  </div>
                </div>
              ))}
            </div>
        } 
        {value === 1 && 
          <>
            <div className="chat-container mess" style={{overflowY:'scroll',height:'238px'}}>
              {IndividualArray.map((message,i) => (
                <div key={i} className='message mt-4' style={{display:'flex',position:'relative'}}>
                  <div className='contact-profile' style={{position:'relative'}}>
                    <img src={message.image} alt='img' style={{ height: '40px', width: '40px', borderRadius: '50%' }}/>
                    <span style={{width:'10px',height:'10px',borderRadius:'20px',backgroundColor:'#4CCD8D',display:'flex',position:'relative',bottom:'10px',left:'30px'}}></span>
                  </div>
                  <div style={{marginLeft:'15px'}}>
                    <h4 style={{fontSize:'14px',fontWeight:'700'}}>{message.name}</h4>
                    <p style={{fontSize:'12px'}}>{message.message}</p>
                  </div>
                  <div style={{position:'absolute',right:'0',top:'0'}}>
                    <p style={{fontSize:'10px',fontWeight:'700',bottom:'10px',position:'relative'}}>{message.day}</p>
                    <span style={{position:'absolute',right:'0',bottom:'-8px',fontSize:'8px',background:'#548CFF',padding:'2px 7px',
                    borderRadius:'10px',color:'#fff'}}>{message.mess}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        } 
    </div>
  )
}

export default ChatsLeft



