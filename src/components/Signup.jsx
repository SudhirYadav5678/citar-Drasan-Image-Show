import React, { useEffect, useState } from 'react'

function Signup() {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const Signup = function (name, username, email, password) {
        console.log(name, email, password);
    }

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>SignUp</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Login</h3>
                    <p className="py-4">
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                        <input type="text" value={username}
                            onChange={(e) => setUserName(e.target.value)} placeholder="Enter your userName" />
                        <input type="text" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your name' />
                        <button onClick={() => {
                            Signup(name, username, email, password);
                        }}>
                            Submit
                        </button>
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Signup