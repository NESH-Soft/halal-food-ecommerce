import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct/FeaturedProduct';
import Header from '../Header/Header/Header';
import ShopCarousel from '../../Shop/ShopCarousel/ShopCarousel';
import HeaderCarousel from '../Header/HeaderCarousel/HeaderCarousel';


const Home = () => {
    return (
        <>
            <HeaderCarousel />
            <FeaturedProduct />
            <div className="my-5">
                <h4>Especial Price Products</h4>
                <hr className="my-4" />
                <ShopCarousel />
            </div>
        </>
    );
};

export default Home;