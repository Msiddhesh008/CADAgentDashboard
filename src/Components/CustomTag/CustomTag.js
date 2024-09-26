import React from "react";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";

const CustomTag = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <LocalOfferTwoToneIcon color="primary" />
      <span 
      style={{
        backgroundColor:"#DEE6F8",
        padding:"0.3rem 1.3rem",
        borderRadius:"4px",
        fontSize:"12px",
        color:"#0F5DFE"
      }}>Business</span>
    </div>
  );
};

export default CustomTag;
