import React from "react";
import "./Account.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Button, Paper } from "@mui/material";

const Account = ({ head, pera, btn }) => {
  return (
    <Paper
      square
      elevation={2}
      className="sec-card m-1 mb-4"
      style={{ marginBottom: "30px", padding: "32px 22px 34px 30px" }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "20px" }}>
        {head}
      </h2>
      <p style={{ fontSize: "16px", color: "#3F3F3F" }}>{pera}</p>

      <div className="row">
        <div className="col-3">
          <Button className="button-contained">
            <FileDownloadOutlinedIcon style={{ marginRight: "6px" }} />
            {btn}
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default Account;
