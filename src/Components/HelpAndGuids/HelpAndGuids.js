import React, { useState } from 'react'

const HelpAndGuids = ({SrNo, title, details, hiddenDtails}) => {
    const [showMore, setShowMore] = useState(false);
  
    const handleShowMoreClick = () => {
      setShowMore(!showMore);
    };
  
    return (
      <div className='pt-4 ps-3 pe-5'>
        <h6 className='fw-bold'>{SrNo}. {title}</h6>
        <p 
        className='text-small lh-lg'>
          {details}
          {showMore ? (hiddenDtails) : null}
          <span  
          style={{
            color:"#548CFF",
            cursor:"pointer"
          }}
          onClick={handleShowMoreClick}>{showMore ? 'Show Less' : 'Show More'}</span >
        </p>
      </div>
    );
  };

export default HelpAndGuids