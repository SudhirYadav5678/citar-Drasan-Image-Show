import React from 'react'
import cards from '../cards.js'
import ShowMe from './ShowMe.jsx'

function Card() {


    return (
        <>
            {  // item loop through map property.
                cards.map((card, index) => {
                    return (
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={card.src}
                                    alt={card.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.name}</h2>
                                <p>{card.descripation}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><ShowMe /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card