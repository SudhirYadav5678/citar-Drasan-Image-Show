import React from 'react'
import cards from "../cards.js"


function ShowMe() {
    return (
        <>
            {
                cards.map((card, index) => {
                    return (
                        <h1>{card.name}</h1>
                    )
                })
            }
        </>
    )
}

export default ShowMe