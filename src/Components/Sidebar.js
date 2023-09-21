import React, { useContext } from "react";
import logo from "../Images/logo.png";
import SlideBtn from "./SubComponents/SlideBtn";
import SlideBtnMini from "./SubComponents/SlideBtnMini";
import logoMini from "../Images/logoMini.png";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import Accordion from "./SubComponents/Accordion";
import upgradeLogo from "../Images/upgradeLogo.png";
import PrimaryButton from "./PrimaryButton";
import { LiaArrowAltCircleRight } from "react-icons/lia";

const Sidebar = ({ children }) => {
  const { isMenuVisible } = useContext(GlobalStateContext);

  const SidebarLarge = () => (
    <div
      style={{
        width: isMenuVisible ? "0%" : "22%",
        transition: "0.5s",
      }}
      className="d-none sidebar pb-3 d-lg-flex ps-2 pe-1 flex-column justify-content-between"
    >
      <div className="side-top gap-3 mt-3 d-flex flex-column justify-content-center">
        <div className="logo-cnt p-4 d-flex align-items-center  justify-content-center w-100">
          <img src={logo} width={150} alt="" />
        </div>
        <SlideBtn
          title="Dashboard"
          path="/"
          size={22}
          iconName="AiOutlineAppstore"
        />
        <SlideBtn path="/task" title="Task" size={20} iconName="FaTasks" />
        <SlideBtn
          path="/contacts"
          title="Contact"
          size={22}
          iconName="LuContact"
        />
        <SlideBtn
          path="/chats"
          title="Chat"
          size={20}
          iconName="BsChatSquareText"
        />
        <Accordion
          title="Settings"
          size={22}
          iconName="FiSettings"
        />
      </div>

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
    </div>
  );

  const SidebarMini = () => (
    <div className="mini-sidebar d-none d-lg-flex pb-5 ps-3 pe-3 flex-column justify-content-between">
      <div className="side-top gap-3 mt-3 d-flex flex-column justify-content-start">
        <div className="logo-cnt pt-4 pb-4 d-flex align-items-center  justify-content-center w-100">
          <img src={logoMini} alt="" />
        </div>
        <SlideBtnMini path="/" size={22} iconName="AiOutlineAppstore" />
        <SlideBtnMini path="/task" size={20} iconName="FaTasks" />
        <SlideBtnMini path="/contacts" size={20} iconName="LuContact" />
        <SlideBtnMini path="chats" size={20} iconName="BsChatSquareText" />
        <SlideBtnMini path="settings" size={20} iconName="FiSettings" />
      </div>

      <div className="mini-upgrade-card  d-flex gap-3 flex-column align-items-center">
        <img src={upgradeLogo} alt="" />
        <LiaArrowAltCircleRight
          className="mini-upgrade-btn pointer rounded-3 p-1 fw-bold"
          size={40}
        />
      </div>
    </div>
  );

  return (
    <div className="app d-flex w-100">
      {/* {isMenuVisible ? <SidebarLarge/> : <SidebarMini/>} */}
      <SidebarLarge />

      <div className="w-100 d-flex flex-column">{children}</div>
    </div>
  );
};

export default Sidebar;
