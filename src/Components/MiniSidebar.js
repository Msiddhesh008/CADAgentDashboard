import React from 'react'
import logoMini from '../Images/logoMini.png'
import SlideBtnMini from './SubComponents/SlideBtnMini'




function MiniSidebar() {
  return (
    <div className='mini-sidebar d-flex ps-4 pe-4 flex-column justify-content-between'>

        <div className="side-top gap-3 mt-3 d-flex flex-column justify-content-start">

        <div className="logo-cnt p-4 d-flex align-items-center  justify-content-center w-100">
        <img src={logoMini}  alt="" />
        </div>
        <SlideBtnMini 
        path="/"
        size={30}
        iconName="AiOutlineAppstore" />
        <SlideBtnMini 
        path="/task"
        size={26}
        iconName="FaTasks" />
        <SlideBtnMini 
        path="/contacts"
        size={26}
        iconName="LuContact" />
        <SlideBtnMini 
        path="chats"
        size={26}
        iconName="BsChatSquareText" />
        <SlideBtnMini 
        path="settings"
        size={26}
        iconName="FiSettings" />
        </div>
        
    </div>
  )
}

export default MiniSidebar