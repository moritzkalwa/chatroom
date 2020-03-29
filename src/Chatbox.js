import React, { useState, useRef } from 'react'
import Texts from "./Texts"
import './index.css';

export default function Chatbox() {
    const [texts, setTexts] = useState([])
    const msgText = useRef()

    function sendText(e) {
        const msg = msgText.current.value;
        if(msg === "") return
        setTexts(prevTexts => {
            return [...prevTexts, {id: prevTexts.length, val: msg, complete: false}]
        })
        msgText.current.value = null;
    }

    return (
        <div className={ "chatbox" }>
            <ul>
                <Texts texts={ texts } />
            </ul>
            <input type="text" ref={ msgText }></input>
            <button type="submit" onClick={ sendText }>Send</button>
        </div>
    )
}
