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
  
 

  return (
    <GlobalStateContext.Provider
      value={{
        isMenuVisible,
        setIsMenuVisible,
        profileDetails,
        setProfileDetails,
        logo,
        setLogo
       
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;