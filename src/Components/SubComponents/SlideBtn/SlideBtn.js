import React from 'react';
import "./SlideBtn.css"
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaTasks, FaWpforms } from 'react-icons/fa';
import { LuContact } from 'react-icons/lu';
import { BsChatSquareText } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';




function SlideBtn({ iconName, size, title, path }) {
  // Create a mapping of icon names to the actual icon components
  const iconComponents = {
    AiOutlineAppstore: AiOutlineAppstore,
    FaTasks: FaTasks,
    FaWpforms:FaWpforms,
    LuContact:LuContact,
    BsChatSquareText:BsChatSquareText,
    FiSettings:FiSettings,
    IoDocumentTextOutline:IoDocumentTextOutline

    // Add more icons here if needed
  };

  // Get the corresponding icon component based on the iconName prop
  const IconComponent = iconComponents[iconName];
  // console.log(iconComponents);

  if (!IconComponent) {
    // Handle the case where an invalid icon name is provided
    return <div>Invalid Icon</div>;
  }

  return (
    <NavLink 
    style={{
        textDecoration:"none"
    }}
    to={path} className='slidebtn ps-3 d-flex align-items-center justify-content-start'>
      <IconComponent size={size} className='icons' />
      <span className='p-2 side-button-title fs-6'>{title}</span>
    </NavLink>
  );
}

export default SlideBtn;
