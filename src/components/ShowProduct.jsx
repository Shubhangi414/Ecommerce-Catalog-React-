import Loading from './Loading';
import { Link } from 'react-router-dom';

const ShowProduct = ({ product, productInCart, addProduct }) => {
    if (Object.keys(product).length === 0) {
        // Product data is not available yet or is empty
        return <Loading />;
    }

    return (
        <> 
            <div className="col-md-6 ">
                <img src={product.images[1]} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{product.category.name}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <h3 className="display-6 fw-bold my-4">
                    ${product.price}
                </h3>
                <p className="lead">{product.description}</p>
                
                {productInCart ? (
                    <Link to="/cart" className="btn btn-dark ms-2 px-3">
                        Go To Cart
                    </Link>
                ) : (
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>
                )}
            </div>
        </>
    );
}

export default ShowProduct;



