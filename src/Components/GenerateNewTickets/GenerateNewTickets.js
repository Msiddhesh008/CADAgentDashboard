import React, { useState } from "react";
import "./GenerateNewTickets.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Paper, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import GenerateTicketsChatScreen from "../GenerateTicketsChatScreen/GenerateTicketsChatScreen";

const GenerateNewTickets = ({ handleGenerateToggleScreen }) => {
  const [ text, setText ] = useState("")
  const [chatArray, setChatArray] = useState([
    {
      id: 1,
      sender: false,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 2,
      sender: true,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      time: "8:00 am",
    },
    {
      id: 3,
      sender: false,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 4,
      sender: false,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 5,
      sender: false,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      time: "8:00 am",
    },
    {
      id: 6,
      sender: true,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 7,
      sender: true,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 8,
      sender: true,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
  ]);

  const handleSend = () => {
    const sent = {
      sender: true,
      message: text,
      time: "8:00 am",
    };
    setChatArray([...chatArray, sent]);
    setText("")
  };

  return (
    <div
      style={{
        height: "80%",
      }}
      className="p-4"
    >
      <span className="d-flex align-items-center gap-1">
        <ArrowBackIcon
          onClick={handleGenerateToggleScreen}
          style={{ color: "#292929", cursor: "pointer" }}
        />
        <Typography style={{ color: "#292929" }} variant="body1">
          Generate New Tickets{" "}
        </Typography>
      </span>

      <div className="row justify-content-center ms-3 me-3 mt-4 flex-lg-nowrap gap-4 h-100">
        <Paper className="col-lg-8 col-12 p-3 pb-5 position-relative">
          <GenerateTicketsChatScreen chatArray={chatArray} />
          <div className="chat-input p-3 pt-2 ">
            <input
              type="text"
              className="w-100 p-2 ps-3 pe-5"
              placeholder="Message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <SendOutlinedIcon onClick={handleSend} className="sentBtn" />
          </div>
        </Paper>

        <Paper className="col-lg-4 col-12">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="col-8 pb-3">Ticket Details</th>
                <th className="text-end pb-3 pointer">
                  <CreateOutlinedIcon style={{ fontSize: "20px" }} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-1 text-small">Issue / Query Type</td>
                <td className="pb-1 text-small">- Claim</td>
              </tr>
              <tr>
                <td className="pb-1 text-small">Contact Number</td>
                <td className="pb-1 text-small">- 9895456215</td>
              </tr>
              <tr>
                <td className="pb-1 text-small">
                  Invoice Date / Purchase Date
                </td>
                <td className="pb-1 text-small">- 05/08/2023</td>
              </tr>
              <tr>
                <td className="pb-1 text-small">City</td>
                <td className="pb-1 text-small">- Mumbai</td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </div>
    </div>
  );
};

export default GenerateNewTickets;
