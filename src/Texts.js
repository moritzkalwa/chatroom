import React from 'react'
import Text from "./Text"

export default function Texts({ texts, user }) {
    return (
        texts.map(text => {
            return <Text key= { text.id } own={user==texts.sender} msg={ text } />
        })
    )
}
