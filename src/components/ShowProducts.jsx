import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, toggleSort,setProducts } from '../redux/action/index';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
  const data = useSelector((state) => state.products.data);
  const filter = useSelector((state) => state.products.filter);
  const sortByPriceAsc = useSelector((state) => state.products.sortByPriceAsc);
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filter.length / productsPerPage);

  const filterProduct = (category) => {
    const updatedList = category === 'All' ? data : data.filter((product) => product.category.name === category);
    dispatch(setFilter(updatedList, category));
    setCurrentPage(1); // Reset to the first page when applying filters
  };

  const sortProducts = () => {
    const sortedData = [...filter];
    sortedData.sort((a, b) => (sortByPriceAsc ? a.price - b.price : b.price - a.price));
    dispatch(toggleSort(sortedData));
  };


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        // Update the products in the Redux store using setProducts
        dispatch(setProducts(data));
        dispatch(setFilter(data, activeCategory)); //Apply any initial filters
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [dispatch, activeCategory]);


  return (
    <>
      <div className="buttons d-flex justify-content-center mb-2 pb-5 category-btn flex-wrap">
        <button
          className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => filterProduct('All')}
        >
          ALL
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-outline-dark me-2 fw-medium fs-5 ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterProduct(category)}
          >
            {category}
          </button>
        ))}
        <button className="btn btn-outline-dark fw-medium fs-5 sort" onClick={sortProducts}>
          {sortByPriceAsc ? 'Sort by Price (Low to High)' : 'Sort by Price (High to Low)'}
        </button>
      </div>

      {currentProducts.map((product) => (
        <div className="col-md-6 col-sm-6 col-sm-6  mb-4 col-lg-4 col-xl-3" key={product.id}>
          <div className="card h-100 text-center p-4">
            {product.images[1] ? (
              <img src={product.images[1]} className="card-img-top" alt={product.title} height="250px" />
            ) : (
              <img src="./assets/images/placeholder.png" alt="placeholder" height="250px" />
            )}
            <div className="card-body">
              <h5 className="card-title mb-0 fs-4"> {product.title.substring(0, 13)} </h5>
              <p className="card-text lead fw-bold">${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-dark">
                See Product
              </Link>
            </div>
          </div>
        </div>
      ))}

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <span
              className="page-link"
              aria-label="Previous"
              onClick={() => paginate(currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <span
              className="page-link"
              aria-label="Next"
              onClick={() => paginate(currentPage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ShowProducts;