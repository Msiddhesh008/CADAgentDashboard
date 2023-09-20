import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

const FAQAccordian = ({ accordianData }) => {
  
    const [expanded, setExpanded] = useState(true);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };
    
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0 p-2 ">
            
    <div className='d-flex  justify-content-start gap-2 align-items-center  pt-2'>
    {accordianData.head.icon}
     <span className='text-small text-dark fw-bold'>lorem lorem</span>
    </div>
{/* 
     <Accordion 
    expanded={expanded === 'panel1'}
    onChange={handleChange('panel1')}
     className='mt-3 rounded-2 overflow-hidden'>
       <AccordionSummary
       className=''
       style={{
         backgroundColor: expanded === "panel1" ? "#E7EFFF" : "",
         borderRadius: "10px 10px 0 0"
       }}
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
         <Typography >What is lorem ipsum?</Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
           malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion> */}


     {accordianData.accordianPanels.map((ele, index) => (
      <Accordion 
      key={index}
    expanded={expanded === ele.panelNumber}
    onChange={handleChange(ele.panelNumber)}
     className='mt-3 rounded-2 overflow-hidden'>
       <AccordionSummary
       className=''
       style={{
         backgroundColor: expanded === ele.panelNumber ? "#E7EFFF" : "",
         borderRadius: "10px 10px 0 0"
       }}
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
         <Typography >{ele.accordianSummary}</Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>{ele.accordianDetails}</Typography>
       </AccordionDetails>
     </Accordion>
))}

    
    
    </div>
  )
}

export default FAQAccordian