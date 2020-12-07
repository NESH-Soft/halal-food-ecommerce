import React from 'react';
import Category from '../../../Category/Category';
import Search from '../../../Search/Search/Search';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import './Header.css';
const Header = () => {
    return (
        <div>
            <section className="position-relative">
                <div className="header">
                    <HeaderCarousel />
                </div>
            </section>
        </div>
    );
};

export default Header;