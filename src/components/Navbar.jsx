import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const cart = useSelector((state) => state.cart); 
    const cartLength = cart.length;
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-1 " href="#">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link to="/" className="nav-link fs-4" aria-current="page" href="#">Home</Link>
                            </li>

                            <li className="nav-item me-2">
                                <Link to="/product" className="nav-link fs-4" href="#">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link fs-4" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link fs-4" href="#">
                                    Contact
                                </a>
                            </li>

                        </ul>
                        <div className="buttons">


                            <Link to="/cart" className='btn btn-outline-dark ms-2 fs-5'>
                                <i className="fa fa-shopping-cart me-1 fs-4"></i>({cartLength})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar