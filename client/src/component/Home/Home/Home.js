import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct/FeaturedProduct';
import ShopCarousel from '../../Shop/ShopCarousel/ShopCarousel';
import HeaderCarousel from '../Header/HeaderCarousel/HeaderCarousel';


const Home = () => {
    return (
        <div >
            <HeaderCarousel />
            <FeaturedProduct />
            <div className="my-5">
                <h4>Especial Price Products</h4>
                <hr className="my-4" />
                <ShopCarousel />
            </div>
        </div>
    );
};

export default Home;