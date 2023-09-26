import React, { useState } from "react";
import "./Chats.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatBox from "../ChatBox/ChatBox";

const ChatsRight = ({ handleGenerateToggleScreen }) => {
  const [ text, setText ] = useState("")
  const [chatArray, setChatArray] = useState([
    {
      id: 1,
      sender: false,
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 2,
      sender: false,
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 3,
      sender: true,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      time: "8:00 am",
    },
    {
      id: 4,
      sender: false,
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 5,
      sender: true,
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 6,
      sender: true,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      time: "8:00 am",
    },
    {
      id: 7,
      sender: false,
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 8,
      sender: false,
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      time: "8:00 am",
    },
    {
      id: 9,
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
        height: "100%",
      }}
      // className="p-4"
    >

      <div className="row justify-content-center ms-3 me-3 mt-4 flex-lg-nowrap gap-4 h-100">
        <div className="chets-box col-lg-12 col-12 p-3 pb-5 position-relative">
          <div className="profile">
            <div className='contact-profile' style={{position:'relative'}}>
              <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt='img'/>
              <span style={{width:'10px',height:'10px',borderRadius:'20px',backgroundColor:'#4CCD8D',display:'flex',position:'relative',bottom:'10px',left:'30px'}}></span>
            </div>
            <div style={{marginLeft:'15px'}}>
              <h4 style={{fontSize:'14px',color:'#292929',fontWeight:'600',marginBottom:'2px'}}>Amelia Johnson</h4>
              <p style={{fontSize:'12px',color:'#4A5057'}}>Typing....</p>
            </div>
          </div>
          <ChatBox chatArray={chatArray} />
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
        </div>

      </div>
    </div>
  );
};

export default ChatsRight;
