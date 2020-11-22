import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsByCategory } from '../../redux/actions/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserCog, faCartPlus, faHeart, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import logo from '../images/logo/logo.png';
import './Navbar.css'
import { Link } from "react-router-dom";
import Category from '../Category/Category';
import Search from '../Search/Search/Search';
import { logout } from '../../redux/actions/authAction'
const Navbar = () => {

    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);
    const cartItem = useSelector((state) => state.cartState.cart);
    const wishList = useSelector((state) => state.wishListState.wishList);
    console.log(wishList)

    return (
        <div className="container-fluid back fixed-top" >
            <div className="col-md-12 m-auto">
                <div className="row pt-2">
                    <div className="col-md-9 col-sm-12 col-12">
                        <p><FontAwesomeIcon icon={faEnvelope} />hasib2130@gmail.com</p>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12">
                        <div className="row float-right">
                            <div>
                                <Link to="" className="text-decoration-none text-dark mx-2"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                <Link to="" className="text-decoration-none text-dark mx-2"><FontAwesomeIcon icon={faLinkedin} /></Link>
                                <Link to="" className="text-decoration-none text-dark mx-2"><FontAwesomeIcon icon={faTwitter} /></Link>
                            </div>
                            <div style={{ borderLeft: '1px solid gray' }}></div>
                            <div>
                                {isAuthenticated ? (<span style={{ cursor: "pointer" }} className="text-decoration-none text-dark mx-4" onClick={() => dispatch(logout())}> <FontAwesomeIcon icon={faUserCog} />Logout</span>) : (<Link to="/login" className="text-decoration-none text-dark mx-4"> <FontAwesomeIcon icon={faUserCog} /> Login</Link>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11">
                    <nav className="navbar navbar-expand-lg  navbar-light ">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3" style={{ paddingLeft: '0px' }}>
                                    <Link to="/" className="navbar-brand" href="#"><img src={logo} width="200px" height="50px" alt="" /></Link>
                                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav">
                                                <li className="nav-item active ml-4">
                                                    <Link to="" className="nav-link nav-top nav-font">HOME</Link>
                                                </li>
                                                <li className="nav-item ml-4">
                                                    <Link to="/shop" className="nav-link other-link nav-font" onClick={() => dispatch(getProductsByCategory())}>SHOP</Link>
                                                </li>
                                                <li className="nav-item ml-4">
                                                    <Link to="" className="nav-link other-link nav-font">BLOGS</Link>
                                                </li>
                                                <li className="nav-item ml-4">
                                                    <Link to="/my-account" className="nav-link other-link nav-font">MY ACCOUNT</Link>
                                                </li>
                                                <li className="nav-item ml-4">
                                                    <Link to="/about-us" className="nav-link other-link nav-font">ABOUT US</Link>
                                                </li>
                                                <li className="nav-item ml-4">
                                                    <Link to="/contact" className="nav-link other-link nav-font">CONTACT</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-1">
                    <ul className="row list-unstyled">
                        <li className="">
                            {isAuthenticated ? (
                                <Link to="/wish-list" className="text-decoration-none text-danger "><FontAwesomeIcon icon={faHeart} style={{ fontSize: '25px' }} />{wishList.length ? (<span className="wishListCountStyle">{wishList.length}</span>) : null}</Link>
                            ) : (
                                    <Link to="/login" className="text-decoration-none text-danger"><FontAwesomeIcon icon={faHeart} style={{ fontSize: '25px' }} /></Link>
                                )}
                        </li>
                        <li className="nav-item ml-3">
                            <Link to="/shoppingCart" className="text-decoration-none text-dark mr-2"> <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '25px' }} /> {cartItem.length ? (<span className="cartCountStyle">{cartItem.length}</span>) : null}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Category />
                </div>
                <div className="col-md-9" >
                    <div className="row">
                        <div className="col-md-9">
                            <Search />
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="d-flex align-items-center" style={{ backgroundColor: '#f5f5f5', borderRadius: '50%', padding: '0px 15px', height: '48px' }}>
                                    <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#76a333', fontSize: '20px' }} />
                                </div>
                                <div className="pl-3">
                                    <p>+65 11.188.888</p>
                                    <p style={{ marginTop: '-20px' }}>support 24/7 time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;