import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/action';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeProduct = (product) => {
        dispatch(removeItem(product));
    };

    return (
        <div className="container py-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="list-group">
                    {cartItems.map((item) => (
                        <li key={item.id} className="list-group-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={item.image} alt={item.title} height="80px" width="80px" />
                                </div>
                                <div className="col-md-6">
                                    <h4>{item.title}</h4>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.qty}</p>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeProduct(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;