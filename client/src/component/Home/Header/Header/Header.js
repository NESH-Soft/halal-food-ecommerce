import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Category from '../Category/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import Search from '../Search/Search';
import './Header.css';
const Header = () => {
    return (
        <div>
            <section className="position-relative">
                <Navbar />
                <div className="row header">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-9">
                        <HeaderCarousel />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;