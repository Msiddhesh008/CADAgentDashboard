import React, { useEffect, useRef } from 'react'
import './GenerateTicketsChatScreen.css'


const GenerateTicketsChatScreen = ({chatArray}) => {
  const chatContainerRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatArray]);

  return (
    <div ref={chatContainerRef} className='generate-tickets-chat-screen h-100 w-100 d-flex flex-column overflow-auto'>
        {chatArray.map((chat, index) => {
            return(
            <div key={index} className={chat.sender ? 'sending-msg-bubble mb-3':'receiving-msg-bubble mb-3'}>
            <span className='msg'>{chat.message}</span>
            <span className='msg-time'>{chat.time}</span>
            </div>)
        })}
    </div>
  )
}

export default GenerateTicketsChatScreen