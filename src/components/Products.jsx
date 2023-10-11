import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const [sortByPriceAsc, setSortByPriceAsc] = useState(true);
    const [cart, setCart] = useState([]);

    let ProductsRender = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            console.log(response)
            if (ProductsRender) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter);
            }

            return () => {
                ProductsRender = false
            }
        }
        getProducts();

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    //=======Category Filter Function==============

    const filterProduct = (categry) => {
        const updatedList = data.filter((x) => x.category === categry);
        setFilter(updatedList)
    }

    //==============================================

    //==========Sorting by price Function============

    const sortProducts = () => {
        const sortedData = [...filter];
        sortedData.sort((a, b) => {
            if (sortByPriceAsc) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setFilter(sortedData);
        setSortByPriceAsc(!sortByPriceAsc);
    };

    //================================================
  // Add item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

    

    const ShowProducts = () => {
        return (
            <>
               
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2 " onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark" onClick={sortProducts}>
                        {sortByPriceAsc ? "Sort by Price (Low to High)" : "Sort by Price (High to Low)"}
                    </button>

                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4 " key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0"> {product.title.substring(0, 13)} </h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <Link to={`/product/${product.id}`} class="btn btn-dark" onClick={() => addToCart(product)}>See Product</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }


    return (
        <>
            <div className="container my-5 ">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='fs-1 fw-bolder product-heading text-center'>Latest Products</h1>
                        <hr className='hr' />

                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>

        
        </>
    )
}

export default Products 