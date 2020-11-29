import React from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import './Header.css';
const Header = () => {
    return (
        <div>
            <section className="position-relative">
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