import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <>
            <div className="banner">
                <div className="card bg-dark text-white border-0">
                    <img src="./assets/images/Background.jpg" className="card-img" alt="Background" height="750px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-1 fw-bolder mb-0 banner-card-text">NEW SEASON ARRIVALS</h5>
                            <p className="card-text  fs-1 fw-medium banner-card-text">SHOP NOW!</p>

                        </div>

                    </div>
                </div>
            </div>
            <Products/>
        </>
    )
}

export default Home