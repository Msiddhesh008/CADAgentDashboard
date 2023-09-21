import React, { useContext } from 'react'
import { CgMenuLeft } from 'react-icons/cg';
import { BiBell } from 'react-icons/bi';
import GlobalStateContext from '../Contexts/GlobalStateContext';
import { Avatar, Badge, Paper } from '@mui/material';

const Header = () => {

  const { isMenuVisible, setIsMenuVisible } = useContext(GlobalStateContext);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    console.log(isMenuVisible);
  };

  return (
    <Paper square elevation={1} className='header p-3 d-flex justify-content-between'>
        <div className="header-left  d-flex flex-column gap-1 align-items-start">
        <CgMenuLeft 
        size={28}
        color='#878A9A'
        onClick={toggleMenu}
        className='menu pointer'/>
         <span 
         style={{color:"#4A5057"}}
         className=' fs-6'>Dashboard</span>

        </div>

        <div className="header-right  pe-3 d-flex align-items-center gap-4">
        <div >
          {/* <span className='notifier'>2</span> */}
        <Badge badgeContent={4}  color="error" >
        <BiBell 
        size={26}
        className='bell' />
        </Badge>
        </div>

          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" />
        </div>
        
    </Paper>
  )
}

export default Header