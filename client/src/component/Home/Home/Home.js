import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct/FeaturedProduct';
import Header from '../Header/Header/Header';
import ShopCarousel from '../../Shop/ShopCarousel/ShopCarousel';


const Home = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <FeaturedProduct />
                    <div className="my-5">
                        <h4>Especial Price Products</h4>
                        <hr className="my-4" />
                        <ShopCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;