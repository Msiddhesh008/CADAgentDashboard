import React, { useContext, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { BiBell } from "react-icons/bi";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Fade,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import LogoutModal from "../Components/Modals/LogoutModal/LogoutModal";
import NotificationAll from "./NotificationAll/NotificationAll";
import Message from "./Message/Message";
import Alerts from "./Alerts/Alerts";

const Header = () => {
  const { isMenuVisible, setIsMenuVisible, profileDetails } =
    useContext(GlobalStateContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setAvatarPopoverOpen(false); // Close the other Popper
  };

  const location = useLocation();
  const path = location.pathname;

  // Function to get the title based on the route
  const getTitle = () => {
    switch (path) {
      case "/task":
        return "Task";
      case "/contacts":
        return "Contacts";
      case "/form":
        return "Form";
      case "/chats":
        return "Chats";
      case "/settings":
        return "Settings";
      case "/support":
        return "Setting » Support";
      case "/user":
        return "Setting » User";
      case "/subscription":
        return "Setting » Subscription";
      case "/tags":
        return "Setting » Tags";
      case "/company-branding":
        return "Setting » Company Branding";
      case "/accounts-security":
        return "Setting » Accounts & Security";
      case "/notification":
        return "Setting » Notifications";
      case "/upgrade-plan":
        return "Upgrade Plan";
      case "/profile":
        return "Profile";

      default:
        return "Dashboard";
    }
  };

  const title = getTitle();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    console.log(isMenuVisible);
  };

  // State to manage the avatar popper
  const [avatarPopoverOpen, setAvatarPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAvatarPopoverOpen(!avatarPopoverOpen);
    setHelloPopperOpen(false); // Close the other Popper
  };

  const handleCloseAvatarPopover = () => {
    setAvatarPopoverOpen(false);
  };

  const [helloPopperOpen, setHelloPopperOpen] = useState(false);
  const handleBellClick = (event) => {
    setAnchorEl(event.currentTarget);
    setHelloPopperOpen(!helloPopperOpen);
    setAvatarPopoverOpen(false); // Close the other Popper
  };

  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
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
        <span style={{ color: "#4A5057" }} className=" text-medium mt-2">
          {title}
        </span>
      </div>

      <div className="header-right  pe-3 d-flex align-items-center gap-4">
        <div>
          <Badge
            onClick={handleBellClick}
            className="pointer"
            badgeContent={4}
            color="error"
          >
            <BiBell size={26} className="bell" />
          </Badge>
          <Popper
            open={helloPopperOpen}
            anchorEl={anchorEl}
            placement="bottom-end"
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={0}>
                <div
                  style={{
                    width: "330px",
                  }}
                >
                  <Paper
                    elevation={2}
                    style={{
                      backgroundColor: "#548CFF",
                    }}
                    className="row pt-3"
                  >
                    <div className="col-7 d-flex align-items-center">
                      <Typography
                        style={{
                          fontSize: "18px",
                          color: "#ffffff",
                        }}
                        variant="h6"
                      >
                        Notifications
                      </Typography>
                    </div>

                    <div className="col-5 d-flex align-items-center justify-content-end">
                      <Paper
                        style={{
                          fontSize: "12px",
                        }}
                        className="fw-bold p-1 ps-2 pe-2"
                      >
                        4 New
                      </Paper>
                    </div>

                    <div className="mt-3 d-flex justify-content-start">
                      <Button
                        onClick={() => handleButtonClick("All")}
                        variant="text"
                        style={{
                          backgroundColor:
                            activeButton === "All" ? "#FFFFFF" : "#548CFF",
                          color: activeButton === "All" ? "#548CFF" : "#FFFFFF",
                          borderRadius: "4px 4px 0 0",
                          fontSize: "12px",
                        }}
                      >
                        All
                      </Button>
                      <Button
                        onClick={() => handleButtonClick("Messages")}
                        variant="text"
                        style={{
                          backgroundColor:
                            activeButton === "Messages" ? "#FFFFFF" : "#548CFF",
                          color:
                            activeButton === "Messages" ? "#548CFF" : "#FFFFFF",
                          borderRadius: "4px 4px 0 0",
                          fontSize: "12px",
                        }}
                      >
                        Messages
                      </Button>
                      <Button
                        onClick={() => handleButtonClick("Alerts")}
                        variant="text"
                        style={{
                          backgroundColor:
                            activeButton === "Alerts" ? "#FFFFFF" : "#548CFF",
                          color:
                            activeButton === "Alerts" ? "#548CFF" : "#FFFFFF",
                          borderRadius: "4px 4px 0 0",
                          fontSize: "12px",
                        }}
                      >
                        Alerts
                      </Button>
                    </div>
                    <Paper elevation={0} square>
                      {activeButton === "All" ? (
                        <NotificationAll />
                      ) : activeButton === "Alerts" ? (
                        <Alerts />
                      ) : (
                        <Message />
                      )}
                    </Paper>
                  </Paper>
                </div>
              </Fade>
            )}
          </Popper>
        </div>

        <div>
          <Avatar
            alt="Remy Sharp"
            src={profileDetails.profilePic}
            onClick={handleAvatarClick} // Open popper when avatar is clicked
            className="pointer" // Make the avatar clickable
          />
          <Popper
            open={avatarPopoverOpen}
            anchorEl={anchorEl}
            placement="bottom-end"
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  style={{
                    width: "220px",
                  }}
                >
                  <Link
                    onClick={handleCloseAvatarPopover}
                    to="/profile"
                    className="d-flex text-decoration-none p-3 pointer align-items-center gap-3"
                  >
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      alt="Remy Sharp"
                      src={profileDetails.profilePic}
                    />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        color: "#4A5057",
                      }}
                      variant="subtitle2"
                    >
                      Profile
                    </Typography>
                  </Link>

                  <Link className="d-flex text-decoration-none border-top  p-3 pointer align-items-center gap-3">
                    <LogoutTwoToneIcon
                      style={{
                        width: "26px",
                        height: "26px",
                      }}
                    />

                    <Typography
                      onClick={handleOpen}
                      sx={{
                        fontWeight: "400",
                        color: "#4A5057",
                      }}
                      variant="subtitle2"
                    >
                      Logout
                    </Typography>
                  </Link>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </div>

      <LogoutModal open={open} setOpen={setOpen} />
    </Paper>
  );
};

export default Header;
