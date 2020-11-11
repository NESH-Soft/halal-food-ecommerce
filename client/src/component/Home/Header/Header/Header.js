import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Category from '../Category/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import Search from '../Search/Search';

const Header = () => {
    return (
        <div>
            <Navbar />
            <section className="col-md-12 position-relative">
                <div className="row">
                    <div className="col-md-3   pl-4" >
                        <Category />
                    </div>
                    <div className="col-md-9" >
                        <div className="row">
                            <div className="col-md-9">
                                <Search />
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="d-flex align-items-center" style={{ backgroundColor: '#f5f5f5', borderRadius: '50%', padding: '0px 20px', height: '60px' }}>
                                        <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#76a333', fontSize: '20px' }} />
                                    </div>
                                    <div className="pl-3">
                                        <p>+65 11.188.888</p>
                                        <p style={{ marginTop: '-15px' }}>support 24/7 time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <HeaderCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;