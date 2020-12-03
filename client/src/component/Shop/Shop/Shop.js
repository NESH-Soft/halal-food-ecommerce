import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import ShopCarousel from '../ShopCarousel/ShopCarousel';
import './Shop.css'

const Shop = () => {
    return (
        <div >
            <div className="row mb-5 shopPage">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <div style={{ borderBottom: '3px solid #76a333' }} className="mb-3">
                        <h3>Shop</h3>
                    </div>
                    <AllProducts />
                    <div className="my-5">
                        <h3>Especial Products</h3>
                        <hr className="my-4" />
                        <ShopCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;