import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaTasks, FaWpforms } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { BsChatSquareText } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";

const SlideBtnMini = ({ iconName, size, path, isMenuVisible }) => {
  // Create a mapping of icon names to the actual icon components
  const iconComponents = {
    AiOutlineAppstore: AiOutlineAppstore,
    FaTasks: FaTasks,
    FaWpforms: FaWpforms,
    LuContact: LuContact,
    BsChatSquareText: BsChatSquareText,
    FiSettings: FiSettings,
    GrDocumentText: GrDocumentText,
    IoDocumentTextOutline: IoDocumentTextOutline,
    // Add more icons here if needed
  };

  // Get the corresponding icon component based on the iconName prop
  const IconComponent = iconComponents[iconName];

  if (!IconComponent) {
    // Handle the case where an invalid icon name is provided
    return <div>Invalid Icon</div>;
  }

  return (
    <NavLink
      style={{
        textDecoration: "none",
      }}
      to={path}
      className="slidebtn p-1 pt-2 pb-2 d-flex align-items-center justify-content-center"
    >
      <IconComponent size={size} className="icons" />
    </NavLink>
  );
};

export default SlideBtnMini;
