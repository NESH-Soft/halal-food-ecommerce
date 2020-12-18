import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct/FeaturedProduct';
import HeaderCarousel from '../Header/HeaderCarousel/HeaderCarousel';


const Home = () => {
    return (
        <div >
            <HeaderCarousel />
            <FeaturedProduct />
        </div>
    );
};

export default Home;