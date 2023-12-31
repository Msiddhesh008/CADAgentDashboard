import React, { useContext } from "react";
import SlideBtn from "./SubComponents/SlideBtn";
import logo from "../Images/logo.png";
import Accordion from "./SubComponents/Accordion";
import upgradeLogo from "../Images/upgradeLogo.png";
import PrimaryButton from "./PrimaryButton";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import logoMini from "../Images/logoMini.png";
import SlideBtnMini from "./SubComponents/SlideBtnMini";
import { LiaArrowAltCircleRight } from "react-icons/lia";

const SideBar2 = ({ children }) => {
  const { isMenuVisible } = useContext(GlobalStateContext);

  
  const dropDownLinks = [
    {
      subTitle: "Support",
      path: "/support",
    },
    {
      subTitle: "User",
      path: "/user",
    },
    {
      subTitle: "Subscription",
      path: "/subscription",
    },
    {
      subTitle: "Tags",
      path: "/tags",
    },
    {
      subTitle: "Company Branding",
      path: "/company-branding",
    },
    {
      subTitle: "Account & Security",
      path: "/accounts-security",
    },
    {
      subTitle: "Notification",
      path: "/notification",
    },
  ];

  const links = [
    {
      title: "Dashboard",
      path: "/",
      icon: "AiOutlineAppstore",
    },
    {
      title: "Task",
      path: "/task",
      icon: "FaTasks",
    },
    {
      title: "Contact",
      path: "/contacts",
      icon: "LuContact",
    },
    {
      title: "Chat",
      path: "/chats",
      icon: "BsChatSquareText",
    },
  ];

  return (
    <div className="app d-flex w-100">
      <div
        style={{
          width: isMenuVisible ? "6%" : "22%",
          transition: "0.3s ease-in-out",
        }}
        className="d-none sidebar pb-3 d-lg-flex ps-2 pe-1 flex-column justify-content-between"
      >
        <div className="side-top gap-3 mt-3 d-flex flex-column justify-content-center">
          <div className="logo-cnt p-4 d-flex align-items-center  justify-content-center w-100">
            <img
              style={{
                opacity: isMenuVisible ? "0" : "1",
                display: isMenuVisible ? "none" : "block",
              }}
              src={logo}
              width={150}
              alt=""
            />

            <img
              style={{
                opacity: isMenuVisible ? "1" : "0",
                display: isMenuVisible ? "block" : "none",
              }}
              src={logoMini}
              alt=""
            />
          </div>
          {links.map((link, index) => (
            <div key={index}>
              {isMenuVisible ? (
                <SlideBtnMini
                  title={link.title}
                  path={link.path}
                  size={22}
                  iconName={link.icon}
                />
              ) : (
                <SlideBtn
                  title={link.title}
                  path={link.path}
                  size={22}
                  iconName={link.icon}
                />
              )}
            </div>
          ))}

          {isMenuVisible ? (
            <SlideBtnMini path="settings" size={20} iconName="FiSettings" />
          ) : (
            <Accordion
              dropLinks={dropDownLinks}
              title="Settings"
              size={22}
              iconName="FiSettings"
            />
          )}
        </div>

        {isMenuVisible ? (
          <div className="mini-upgrade-card  d-flex gap-3 flex-column align-items-center">
            <img src={upgradeLogo} alt="" />
            <LiaArrowAltCircleRight
              className="mini-upgrade-btn pointer rounded-3 p-1 fw-bold"
              size={40}
            />
          </div>
        ) : (
          <div className="upgrade-card  rounded-3 pt-4 pb-4 gap-3 mt-3 w-100 d-flex flex-column align-items-center ">
            <img src={upgradeLogo} width={40} alt="logo" />
            <span className="fs-5">Upgrade Plan</span>
            <span className="text-center text-small text-dark">
              Lorem ipsum dolor sit Praesentium, repellendus!
            </span>
            <PrimaryButton
              title="Upgrade Plan"
              path="/upgrade-plan"
              padding="0.4rem 2rem"
            />
          </div>
        )}
      </div>

      <div className="w-100 d-flex flex-column">{children}</div>
    </div>
  );
};

export default SideBar2;
