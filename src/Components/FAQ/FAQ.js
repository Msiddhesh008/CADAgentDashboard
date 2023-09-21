
import React from 'react'
import './FAQ.css'
import FAQAccordian from '../FAQAccordian/FAQAccordian'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';



const FAQ = () => {

  const generalQuestionAccordianList = {
    head: {
      icon: <HelpOutlineOutlinedIcon color='primary'/>,
      title: "General Questions"
    },
    accordianPanels:[
      {
        panelNumber : "pannel1",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel2",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel3",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel4",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      }
    ]
  }

  const manageAccountAccordianList = {
    head: {
      icon: <ManageAccountsIcon color='primary'/>,
      title: "General Questions"
    },
    accordianPanels:[
      {
        panelNumber : "pannel1",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel2",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel3",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel4",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      }
    ]
  }
  
  const privacySecurityAccordianList = {
    head: {
      icon: <AdminPanelSettingsOutlinedIcon color='primary'/>,
      title: "General Questions"
    },
    accordianPanels:[
      {
        panelNumber : "pannel1",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel2",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel3",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      },
      {
        panelNumber : "pannel4",
        accordianSummary: "What is lorem ipsum?",
        accordianDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leolobortis eget"
      }
    ]
  }

  return (
    <div className='faq overflow-auto h-100'>
      <div 
      style={{
        width:"100%",
        height:"180px",
        position:"relative",
        backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/056f/900c/2f874b2f621b17c725c9d79797056f5a?Expires=1696204800&Signature=TV1tkmB6-hH8YcQM2NdEWNdVyODVkmX1CmyBaw-ci0QvSBabZKX-9fg4annj3TYv0V~4JBb5WOtjCd1eJmMZeK3a6544Hw9OPA0uUQpBiMzNf4Z5piUYJNqOge9sbg4PVsA9AFScpiTlBUTv8fMc3GuEl-8GdgCQLyzXJ3iHcpwUd8~vLOKySQz89a6UsRjRd5arnjksXwRa7n2~Zp4uCchpbmqLDBAQnCRkEkP3B9XcrzuoHecVRrXQnitI8isKAN4xAuTMYfRHpnWYm4jFnXgkjYrjh5kxWJJWCg57dih6V1PLds5qBc9p8V~V5G403e3WtARkvLzUUn0oSxYIOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")', // Replace "your_image_url_here" with the URL of your background image
        backgroundSize: "cover", // This property ensures the image covers the entire element
        backgroundPosition: "center", // Center the background image
      }}
      >
      <div 
        className='pt-5 ps-4'
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the color and opacity as needed
          width: "100%",
          height: "100%",
          // position: "absolute",
          top: 0,
          left: 0,

        }}
      >
      <h2 className=' fw-bold text-white'>Frequetly asked <br /> question</h2>
      </div>
      </div>

      <div className="row h-auto w-100  p-3">

        <FAQAccordian
        accordianData={generalQuestionAccordianList}
        />

        
        <FAQAccordian
        accordianData={manageAccountAccordianList}
        />
        
        <FAQAccordian
        accordianData={privacySecurityAccordianList}
        />


      </div>
        
      </div>
      
  )
}

export default FAQ