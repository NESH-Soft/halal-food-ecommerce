import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import FeaturedProduct from '../../Home/FeaturedProduct/FeaturedProduct/FeaturedProduct';
import ProductView from '../../Home/FeaturedProduct/ProductView/ProductView';
import Navbar from '../../Navbar/Navbar';
import AllProducts from '../AllProducts/AllProducts';
// import ShopCarousel from '../ShopCarousel/ShopCarousel';

const Shop = () => {
    return (
        <div>
            <Navbar />
            <div className="row mb-5" style={{marginTop:'200px'}}>
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    {/* <ShopCarousel /> */}
                    <AllProducts/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;