import React, { useState, useRef } from 'react'
import Texts from "./Texts"
import Chats from "./Chats"
import './index.css';

export default function Chatbox() {
    const user = "Guest"
    const msgText = useRef()

    const [texts, setTexts] = useState([])
    const [chats, setChats] = useState(["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "Chat 2", "Chat 3", "Chat 4", "Chat 5", "Chat 6", "Chat 7", "Chat 8"])

    function sendText(e) {
        const msg = msgText.current.value;
        if(msg === "") return
        setTexts(prevTexts => {
            return [...prevTexts, {id: prevTexts.length, sender: user, val: msg, complete: false}]
        })
        msgText.current.value = null;
    }

    function changeChat(e) {

    }

    return (
        <div className={ "chat" }>
            <div className={ "chatselect" }>
                <div className={"selwrapper"}>
                        <Chats onClick={changeChat} chats={ chats } />
                </div>
            </div>
            <div className={ "activechat" }>
                <div className={ "chatbox" }>
                    <Texts texts={ texts } user={user}/>
                </div>
                <div className= { "messagebox" }>
                    <input type="text" ref={ msgText }></input>
                    <button type="submit" onClick={ sendText }>Send</button>
                </div>
            </div>
        </div>
    )
}
