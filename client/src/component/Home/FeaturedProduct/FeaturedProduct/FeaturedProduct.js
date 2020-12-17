import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from '../../../../redux/actions/product'
import ProductView from '../ProductView/ProductView';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    //eslint-disable-next-line
  },[]);

    return (
        <div className="featuredProduct">
            <div className="text-center mt-5 feturedText">
                <h3>Trending Product</h3>
                <hr style={{ borderBottom: '4px solid #7fad39', width: '10%' }} />
            </div>
            <div className="mb-5">
                <ProductView/>
            </div>
        </div>
    );
};

export default FeaturedProduct;