import React from 'react'
import Chat from "./Chat"

export default function Chats({chats}) {
    return (
        chats.map(chat => {
            return (
                <Chat chat={chat} />
            )
        })
    )
}
