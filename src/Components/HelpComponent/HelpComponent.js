import React from 'react'
import HelpAndGuids from '../HelpAndGuids/HelpAndGuids'
import './HelpComponent.css'

const HelpComponent = () => {
  
  
  return (
    <div className='help-component overflow-auto h-100'>
      <div 
      style={{
        width:"100%",
        height:"180px",
        position:"relative",
        backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/5d0d/5df0/acf2e32f72541dd1b1054b88a80de2ac?Expires=1696204800&Signature=V9k4YxTVKMeBXvWNjp~FZQhxeW~rukiHgz3nmJfEghfPRCP2DYBZaCceVLzgbHTlQF6oP5Zsw~vRhif3zGdszyCWVpUQ3a9uTcuXGvKVI7If3aLmiThGCwKO70geLj6gI6hSOK2heu~tKqaAOU~thwr0hJjYDLmQjfgOLi~E7sutw4BBzczdI1-Z6EOVhbHdtW1Yb3kfDTXuld2xOtaUNyuxWz0jluoiAoZjaGdKpZh4ZJcA-Ol2j809r5sD-QgbzDkJrXsN5N18bi~-YinyYxGwidinTpTpUt2rYy2nfZO4eveMwvrpdN6rsmAUvTUKCoI-5ff9EENZPO8ONTv~aQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")', // Replace "your_image_url_here" with the URL of your background image
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
      <h2 className=' fw-bold text-white'>Help & <br />Guidance</h2>
      </div>
      </div>
      <HelpAndGuids 
      SrNo={1}
      title="Lorem Ipsum" 
      details="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "
      hiddenDtails="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English  "
      />
      
      <HelpAndGuids 
      SrNo={2}
      title="Lorem Ipsum" 
      details="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "
      hiddenDtails="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English  "
      />
      
      <HelpAndGuids 
      SrNo={3}
      title="Lorem Ipsum" 
      details="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "
      hiddenDtails="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English  "
      />
      
      
      


        
      </div>
      
  )
}

export default HelpComponent