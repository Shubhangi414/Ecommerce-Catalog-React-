import React, { useState, useEffect } from 'react';

import ShowProducts from './ShowProducts';
import Loading from './Loading';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [sortByPriceAsc, setSortByPriceAsc] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');


    let ProductsRender = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            if (ProductsRender) {
                   setData(await response.clone().json());
                setFilter(await response.json());
                // setData(await response.json());
                setLoading(false);
            }
        };

        getProducts();
     

    }, []);

    const filterProduct = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilter(data);
        } else {
            const updatedList = data.filter((product) => product.category.name === category);
            setFilter(updatedList);
            console.log(updatedList)
        }
    };
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

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='fs-1 fw-bolder product-heading text-center'>Latest Products</h1>
                        <hr className='hr'/>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : (
                        <ShowProducts
                            filter={filter}
                            sortByPriceAsc={sortByPriceAsc}
                            sortProducts={sortProducts}
                            filterProduct={filterProduct}
                            activeCategory={activeCategory}
                            
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;