import React from 'react'

export default function Text({ msg }) {
    return (
    <p>{ msg.sender }:{ msg.val }</p>
    )
}
