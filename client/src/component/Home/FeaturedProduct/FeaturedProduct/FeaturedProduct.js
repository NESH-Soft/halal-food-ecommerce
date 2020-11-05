import React from 'react';
import ProductView from '../ProductView/ProductView';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
    return (
        <div className="col-md-12 m-auto featuredProduct">
            <div className="text-center mt-5 feturedText">
                <h1>Featured Product</h1>
                <hr style={{ borderBottom: '4px solid #7fad39', width: '10%' }} />
            </div>
            <div className="mb-5">
                <ProductView />
            </div>
        </div>
    );
};

export default FeaturedProduct;