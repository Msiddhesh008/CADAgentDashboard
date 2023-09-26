import React, { useEffect, useRef } from 'react'


const ChatBox = ({chatArray}) => {
  const chatContainerRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatArray]);

  return (
    <div ref={chatContainerRef} className='chat-screen  w-100 d-flex flex-column overflow-auto'>
        {chatArray.map((chat, index) => {
            return(
                <>
                    <div key={chat.id} className={chat.sender ? 'sending-msg-bubble mb-3':'receiving-msg-bubble mb-3'}>
                        <div style={{position:'absolute',top:'3px',left:'-49px'}}>{chat.image && <img  style={{width:'40px',height:'40px',objectFit:'cover',borderRadius:'50px'}} src={chat.image} alt="Message"  />}</div>        
                        <span className='msg'>{chat.message}</span>
                        <span className='msg-time'>{chat.time}</span>
                    </div>
                </>
            )
        })}
    </div>
  )
}

export default ChatBox