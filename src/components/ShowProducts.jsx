import React from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = ({ filter, filterProduct, sortByPriceAsc, sortProducts, activeCategory }) => {

    return (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "All" ? 'active' : ''}`} onClick={() => filterProduct("All")}>ALL</button>
                <button className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "Clothes" ? 'active' : ''}`} onClick={() => filterProduct("Clothes")}>Clothes</button>
                <button className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "Electronics" ? 'active' : ''}`} onClick={() => filterProduct("Electronics")}>Electronics</button>
                <button className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "Furniture" ? 'active' : ''}`} onClick={() => filterProduct("Furniture")}>Furniture</button>
                <button className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "Shoes" ? 'active' : ''}`} onClick={() => filterProduct("Shoes")}>Shoes</button>
                <button className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "Others" ? 'active' : ''}`} onClick={() => filterProduct("Others")}>Others</button>
                <button className="btn btn-outline-dark fw-medium fs-5" onClick={sortProducts}>
                    {sortByPriceAsc ? "Sort by Price (Low to High)" : "Sort by Price (High to Low)"}
                </button>

            </div>
            {filter.map((product) => {
                return (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.images[0]} className="card-img-top " alt={product.title} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0 fs-4"> {product.title.substring(0, 13)} </h5>
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-dark">See Product</Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ShowProducts;



