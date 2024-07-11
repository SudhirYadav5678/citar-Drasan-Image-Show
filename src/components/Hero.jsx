import React from 'react'

function Hero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://images.pexels.com/photos/26731316/pexels-photo-26731316/free-photo-of-a-woman-walking-down-a-road-with-a-blanket-wrapped-around-her.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Chitr Drashan</h1>
                        <p className="py-6">
                            Images are beauty of moments which are special for every one.
                        </p>
                        <button className="btn btn-primary">Login Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero