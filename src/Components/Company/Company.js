import React, { useContext, useState } from 'react';
import './Company.css'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import GlobalStateContext from '../../Contexts/GlobalStateContext';



function Dummy({ onFileDrop }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const { logo, setLogo } = useContext(GlobalStateContext)

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
  
    // Check if there are files dropped and if the first file is an image
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      const file = files[0];
  
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const logoDataUrl = event.target.result;
        setLogo(logoDataUrl);
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleImageChange = (e) => {

    // Check if e.target.files is defined and not empty
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
  
      // Rest of your code to handle the selected file
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const logoDataUrl = event.target.result;
          setLogo(logoDataUrl);
        };
  
        reader.readAsDataURL(file);
      }
      
      console.log(logo);
    }
  };
  
  return (
    <div
      className={`file-drop-zone ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragOver ? 'Drop files here' : 'Drag & Drop your file or'}
      <Button 
        component="label" 
        variant="text" 
        style={{ textTransform: 'none' }}
      >
        Browse
        <VisuallyHiddenInput type="file" onChange={handleImageChange} />
      </Button>
    </div>
  );
}

export default Dummy;
