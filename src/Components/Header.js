import React, { useContext } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { BiBell } from "react-icons/bi";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import { Avatar, Badge, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { isMenuVisible, setIsMenuVisible } = useContext(GlobalStateContext);

  const location = useLocation();
  const path = location.pathname;

  // Function to get the title based on the route
  const getTitle = () => {
    switch (path) {
      case "/task":
        return "Task";
      case "/contacts":
        return "Contacts";
      case "/chats":
        return "Chats";
      case "/settings":
        return "Settings";
      case "/support":
        return "Support";
      case "/user":
        return "User";
      case "/subscription":
        return "Subscription";
      case "/tags":
        return "Tags";
      case "/company-branding":
        return "Company Branding";
      case "/accounts-security":
        return "Accounts & Security";
      case "/notification":
        return "Notifications";
      case "/upgrade-plan":
        return "Upgrade Plan";

      default:
        return "Dashboard";
    }
  };

  const title = getTitle();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    console.log(isMenuVisible);
  };

  return (
    <Paper
      square
      elevation={1}
      className="header p-3 d-flex justify-content-between"
    >
      <div className="header-left  d-flex flex-column gap-1 align-items-start">
        <CgMenuLeft
          size={28}
          color="#878A9A"
          onClick={toggleMenu}
          className="menu pointer"
        />
        <span style={{ color: "#4A5057" }} className=" fs-6">
          {title}
        </span>
      </div>

      <div className="header-right  pe-3 d-flex align-items-center gap-4">
        <div>
          {/* <span className='notifier'>2</span> */}
          <Badge badgeContent={4} color="error">
            <BiBell size={26} className="bell" />
          </Badge>
        </div>

        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
        />
      </div>
    </Paper>
  );
};

export default Header;
