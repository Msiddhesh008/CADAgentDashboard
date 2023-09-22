import React, { useState } from 'react'
import Company from '../../Components/Company/Company'
import PrimaryButton from '../../Components/PrimaryButton';
import './CompanyBranding.css'

const CompanyBranding = () => {
  const handleFileDrop = (files) => {
    console.log('Dropped files:', files);
  };


  return (
    <div 
      className='company-brand m-3 w-85 h-100 rounded-2 overflow-auto'>
      <div className='uploder ' style={{margin:'3px',marginBottom:'30px'}}>
        <h4>Upload Your Logo</h4>
        <p style={{borderBottom:'1px solid #00000045',paddingBottom:'15px'}}>printing and typesettings industry. Lorem Ipsum has been the an unknown printer took a galley of type and an unknown p</p>
        <Company onFileDrop={handleFileDrop}/>
      </div>
      <div className='uploder' style={{margin:'3px',marginBottom:'30px'}}>
        <h4>Description</h4>
        <p style={{borderBottom:'1px solid #00000045',paddingBottom:'15px'}}>printing and typesettings industry. Lorem Ipsum has been the an unknown printer took a galley of type and an unknown p</p>
        <p className='box'>Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the  Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the an unknown printer took a galley of type and an unknown printer took a galley of type 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        </p>
      </div>
      <div className='comp-btn' style={{paddingBottom:'30px'}}>
        <PrimaryButton 
        title='Save Details' 
        />
      </div>
    </div>
  )
}

export default CompanyBranding