import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const cart = useSelector((state) => state.cart); // Access the cart state 
    const cartLength = cart.length;
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light  py-4 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4 " href="#">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>

                            <li className="nav-item me-2">
                                <Link to="/product" className="nav-link " href="#">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>

                        </ul>
                        <div className="buttons">
                    

                            <Link to="/cart" className='btn btn-outline-dark ms-2 '>
                                <i className="fa fa-shopping-cart me-1"></i>({cartLength})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar