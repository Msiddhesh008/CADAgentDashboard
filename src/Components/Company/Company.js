import React, { useState } from 'react';
import './Company.css'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';



function Dummy({ onFileDrop }) {
  const [isDragOver, setIsDragOver] = useState(false);

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
    onFileDrop(files);
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

  return (
    <div
      className={`file-drop-zone ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragOver ? 'Drop files here' : 'Drag & Drop your file or'}
      <Button component="label" variant="text" style={{textTransform:'none'}}>
        Browse
        <VisuallyHiddenInput type="file" />
      </Button>
      
    </div>
  );
}

export default Dummy;
