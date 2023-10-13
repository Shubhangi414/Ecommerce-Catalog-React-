import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from './context/ProductsContext';

const ShowProducts = () => {
    const {
        filter,
        sortByPriceAsc,
        sortProducts,
        activeCategory,
        categories,
        filterProduct,
    } = useProductsContext();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const totalPages = Math.ceil(filter.length / productsPerPage);
    return (
        <>
            <div className=" buttons d-flex justify-content-center mb-2 pb-5 category-btn flex-wrap">
                <button
                    className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === "All" ? 'active' : ''}`}
                    onClick={() => {
                        setCurrentPage(1); // Reset to the first page when applying filters
                        filterProduct("All");
                    }}>
                    ALL
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentPage(1); // Reset to the first page when applying filters
                            filterProduct(category);
                        }}
                    >
                        {category}
                    </button>
                ))}
                <button className="btn btn-outline-dark fw-medium fs-5 sort" onClick={sortProducts}>
                    {sortByPriceAsc ? "Sort by Price (Low to High)" : "Sort by Price (High to Low)"}
                </button>
            </div>

            {currentProducts.map((product) => (
                <div className="col-md-6 col-sm-6 col-sm-6  mb-4 col-lg-4 col-xl-3" key={product.id}>
                    <div className="card h-100 text-center p-4">
                        {product.images[1] ? (
                            <img src={product.images[1]} className="card-img-top" alt={product.title} height="250px" />
                        ) : (
                            <img src='./assets/images/placeholder.png' alt='placeholder' height="250px" />

                        )}
                        <div className="card-body">
                            <h5 className="card-title mb-0 fs-4"> {product.title.substring(0, 13)} </h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <Link to={`/product/${product.id}`} className="btn btn-dark">See Product</Link>
                        </div>
                    </div>
                </div>
            ))}

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <Link
                            className="page-link"
                            to="/product"
                            aria-label="Previous"
                            onClick={() => paginate(currentPage - 1)}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <Link
                            className="page-link"
                            to="/product"
                            aria-label="Next"
                            onClick={() => paginate(currentPage + 1)}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default ShowProducts;