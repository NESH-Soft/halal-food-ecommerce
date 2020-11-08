import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../../../actions/product'
import ProductView from '../ProductView/ProductView';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[]);

  const products = useSelector((state) => state.productState.products);
  console.log(products);

    return (
        <div className="col-md-12 m-auto featuredProduct">
            <div className="text-center mt-5 feturedText">
                <h1>Featured Product</h1>
                <hr style={{ borderBottom: '4px solid #7fad39', width: '10%' }} />
            </div>
            <div className="mb-5">
                <ProductView products={products}/>
            </div>
        </div>
    );
};

export default FeaturedProduct;