import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const cart = useSelector((state) => state.cart);
    const cartLength = cart.length;


    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm position-fixed " style={{ top: 0, width: '100%' }}>
                <div className="container ">
                    <Link className="navbar-brand fw-bold fs-1 " to="/">E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link to="/" className="nav-link fs-4" aria-current="page" >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item me-2">
                                <Link to="/product" className="nav-link fs-4">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link fs-4" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link fs-4" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                        <div className="buttons">
                            <Link to="/cart" className='btn btn-outline-dark ms-2 fs-5'>
                                <i className="fa fa-shopping-cart me-1 fs-4"></i>
                                ({cartLength})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar