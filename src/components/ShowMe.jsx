import React from 'react'
import cards from "../cards.js"

function ShowMe() {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            < button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Show Me</button >
            {
                cards.map((card, index) => {
                    return (
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg"><img src={card.src} alt={card.name} /></h3>
                                <p className="py-4">{card.descripation}
                                </p>
                            </div>
                        </dialog>
                    )
                })
            }
        </>
    )
}

export default ShowMe