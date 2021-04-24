import React, { useState } from 'react'
import "./ChatScreen.css"
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Lisa',
            image: '...',
            message: 'YO boy'
        },
        {
            name: 'Lisa',
            image: '...',
            message: 'How are you?'
        },
        {
            message: 'fine'
        }
    ])
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You Matched with</p>
            {messages.map( message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chat__image" 
                        alt={message.name} 
                        src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) :
                (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
                
            ))}
        </div>
    )
}

export default ChatScreen
