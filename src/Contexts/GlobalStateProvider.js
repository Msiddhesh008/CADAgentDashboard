// GlobalStateContext.js
import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import companyLogo from "../Images/logo.png"

const GlobalStateProvider = ({ children }) => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [logo, setLogo] = useState(companyLogo);
  
  const [ profileDetails, setProfileDetails ] = useState({
    profilePic:"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    firstName:"Priyanka",
    lastName:"Joshi",
    mobile: 9865485624,
    email: "testing009@gmail.com"
  })

  
  const [IndividualArray, setIndividualArray] = useState ([
    {
      id:'1',
      image:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',  
      groupicon:'',
      name:'Amelia Johnson',
      message:'Lorem ipsum dolor sit amet 3',
      time:'8.45 Am',
      mess:'14',
      day:'Yesterday',
      chats:[
        {
          id: 1,
          sender: false,
          message: "Amelia ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ]
    },
    {
      id:'2',
      image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',  
      name:'Emma Smith',
      message:'Lorem ipsum dolor sit amet 4',
      time:'8.45 Am',
      mess:'7',
      day:'Yesterday',
      chats:[
        {
          id: 1,
          sender: false,
          message: "Emma ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ]
    },
    {
      id:'3',
      image:'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',  
      name:'Francis Mitcham',
      message:'Lorem ipsum dolor sit amet 5',
      time:'8.45 Am',
      mess:'10',
      day:'Yesterday',
      chats:[
        {
          id: 1,
          sender: false,
          message: "Francis ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ]
    },
    {
      id:'4',
      image:'https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=1024x1024&w=is&k=20&c=HThNP7cTwpPjRgylneAIW2VnkHDInJ27qnpjzcC4f-Y=',  
      name:'Neil Owen',
      message:'Lorem ipsum dolor sit amet 6',
      time:'8.45 Am',
      mess:'18',
      day:'Yesterday',
      chats:[
        {
          id: 1,
          sender: false,
          message: "Neil ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ]
    },
    {
      id:'5',
      image:'https://media.istockphoto.com/id/515005642/photo/portrait-of-smiling-young-man-over-colored-background.jpg?s=1024x1024&w=is&k=20&c=EHsFH_bN0sop9mcWCOKWDOqH29h5gh326F6bw1-joPY=',  
      name:'Max Smith',
      message:'Lorem ipsum dolor sit amet 7',
      time:'8.45 Am',
      mess:'40',
      day:'Yesterday',
      chats:[
        {
          id: 1,
          sender: false,
          message: "Max ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ]
    },
    {
      id:'6',
      image:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',  
      name:'Melody Macy',
      message:'Lorem ipsum dolor sit amet 8',
      time:'8.45 Am',
      mess:'9',
      day:'Yesterday',
      chats:[
        {
          id: 1,
          sender: false,
          message: "Max ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ]
    },
  ])

  
  
 

  return (
    <GlobalStateContext.Provider
      value={{
        isMenuVisible,
        setIsMenuVisible,
        profileDetails,
        setProfileDetails,
        logo,
        setLogo,
        IndividualArray,
        setIndividualArray
       
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;