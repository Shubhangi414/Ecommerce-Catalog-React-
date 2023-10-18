import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/action';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeProduct = (product) => {
        dispatch(removeItem(product));
    };

    const increaseProductQuantity = (product) => {
        dispatch(increaseQuantity(product));
    };

    const decreaseProductQuantity = (product) => {
        dispatch(decreaseQuantity(product));
    };

    const calculateTotalPrice = () => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price * item.qty;
        }
        return total;
    };

    return (
        <div className="container py-5 mt-5 ">
            <h2 className='text-center mb-2 fw-bold fs-2 mt-5'>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className='text-center mb-2 mb-5'>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-group mt-5">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item">
                                <div className="row ">
                                    <div className="col-md-2 ">
                                        <img src={item.images} alt={item.title} height="150px" width="150px" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className='fs-3 fw-bold'>{item.title}</h4>
                                        <p className='fs-4 fw-medium'>Price: ${item.price}</p>
                                        <p className='fs-5'>Quantity: {item.qty}</p>
                                    </div>
                                    <div className="col-md-4  ps-5">
                                        <div className="cart-buttons">
                                        <button className="btn btn-secondary minus me-2"
                                                onClick={() => decreaseProductQuantity(item)}>-
                                        </button>
                                        <button
                                                className="btn btn-secondary plus my-5 me-5 "
                                                onClick={() => increaseProductQuantity(item)}>+
                                        </button>
                                        <button
                                                className="btn btn-danger fs-4"
                                                onClick={() => removeProduct(item)}>
                                                Remove
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-4">
                        <p className='fw-bold fs-3 text-end '>Cart Total: ${calculateTotalPrice()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;