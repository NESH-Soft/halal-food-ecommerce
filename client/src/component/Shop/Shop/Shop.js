import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import FeaturedProduct from '../../Home/FeaturedProduct/FeaturedProduct/FeaturedProduct';
import ProductView from '../../Home/FeaturedProduct/ProductView/ProductView';
import Navbar from '../../Navbar/Navbar';
import AllProducts from '../AllProducts/AllProducts';
import ShopCarousel from '../ShopCarousel/ShopCarousel';

const Shop = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row mb-5" style={{ marginTop: '200px' }}>
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <div style={{borderBottom: '3px solid #76a333'}} className="mb-3">
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
            <Footer />
        </div>
    );
};

export default Shop;