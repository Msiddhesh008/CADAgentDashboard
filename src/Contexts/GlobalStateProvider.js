// GlobalStateContext.js
import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalStateProvider = ({ children }) => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
 

  return (
    <GlobalStateContext.Provider
      value={{
        isMenuVisible,
        setIsMenuVisible
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;