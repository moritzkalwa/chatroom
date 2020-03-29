import React from 'react'

export default function Text({msg, own}) {
    if({own}) {
        return(<p className ={"ownText"}>{ msg.val }</p>);
    } else {
        return(<p>{msg.sender}:{ msg.val }</p>);
    }
}
