import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Chats.css';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';


const ChatsLeft = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [IndividualArray] = useState ([
      {
        id:'1',
        image:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',  
        groupicon:'',
        name:'Amelia Johnson',
        message:'Lorem ipsum dolor sit amet 3',
        time:'8.45 Am',
        mess:'14',
        day:'Yesterday',
      },
      {
        id:'2',
        image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',  
        name:'Emma Smith',
        message:'Lorem ipsum dolor sit amet 4',
        time:'8.45 Am',
        mess:'7',
        day:'Yesterday'
      },
      {
        id:'3',
        image:'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',  
        name:'Francis Mitcham',
        message:'Lorem ipsum dolor sit amet 5',
        time:'8.45 Am',
        mess:'10',
        day:'Yesterday'
      },
      {
        id:'4',
        image:'https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=1024x1024&w=is&k=20&c=HThNP7cTwpPjRgylneAIW2VnkHDInJ27qnpjzcC4f-Y=',  
        name:'Neil Owen',
        message:'Lorem ipsum dolor sit amet 6',
        time:'8.45 Am',
        mess:'18',
        day:'Yesterday'
      },
      {
        id:'5',
        image:'https://media.istockphoto.com/id/515005642/photo/portrait-of-smiling-young-man-over-colored-background.jpg?s=1024x1024&w=is&k=20&c=EHsFH_bN0sop9mcWCOKWDOqH29h5gh326F6bw1-joPY=',  
        name:'Max Smith',
        message:'Lorem ipsum dolor sit amet 7',
        time:'8.45 Am',
        mess:'40',
        day:'Yesterday'
      },
      {
        id:'6',
        image:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',  
        name:'Melody Macy',
        message:'Lorem ipsum dolor sit amet 8',
        time:'8.45 Am',
        mess:'9',
        day:'Yesterday'
      },
    ])


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



