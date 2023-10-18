import React from 'react';
import { useProductsContext } from './context/ProductsContext';
import ShowProducts from './ShowProducts';
import Loading from './Loading';

const Products = () => {
  const { loading } = useProductsContext();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className='fs-1 fw-bolder product-heading text-center mt-5'>Latest Products</h1>
          <hr className='hr' />
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts/>}
      </div>
    </div>
  );
};

export default Products;