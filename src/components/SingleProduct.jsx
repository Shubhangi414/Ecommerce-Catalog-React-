import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/action'
import Loading from './Loading'
import ShowProduct from './ShowProduct'

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setAddedToCart] = useState(false);



    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addItem(product))
        setAddedToCart(true);
    }

    const getProduct = async () => {
        setLoading(true)
        // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

        setProduct(await response.json())
        setLoading(false)
    }

    useEffect(() => {
        
        getProduct()

    }, [id])

    const productInCart = cartItems.find((item) => item.id === product.id);

    return (
        <>
            <div className="container py-5 ">
                <div className="row py-5 mt-5">
                    {loading ? <Loading /> : <ShowProduct
                        product={product}
                        productInCart={productInCart}
                        addProduct={addProduct}
                    />}
                </div>
            </div>

        </>
    )
}

export default Product