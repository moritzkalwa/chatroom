import React from 'react'
import Text from "./Text"

export default function Texts({ texts }) {
    return (
        texts.map(text => {
            return <Text key= { text.id } msg={ text } />
        })
    )
}
