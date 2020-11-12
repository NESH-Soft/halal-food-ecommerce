import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct/FeaturedProduct';
import Header from '../Header/Header/Header';
import ProductCarosel from '../ProductCarousel/ProductCarosel';
import Footer from '../../Footer/Footer/Footer'


const Home = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row">
                <div className="col-md-12">
                    <ProductCarosel />
                    <FeaturedProduct />
                </div>
            </div>
            <div >
                <Footer />
            </div>

        </div>
    );
};

export default Home;