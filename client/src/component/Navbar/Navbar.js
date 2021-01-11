import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserCog, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import logo from '../images/logo/logo.svg';
import './Navbar.css'
import { Link } from "react-router-dom";
import { logout, loadUser } from '../../redux/actions/authAction';
import { getProducts } from '../../redux/actions/product';
import { getWishList } from '../../redux/actions/wishlistAction';
const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);
    const cartItem = useSelector((state) => state.cartState.cart);
    const wishList = useSelector((state) => state.wishListState.wishList);
    const dispatch = useDispatch()
    useEffect(() => {
    
            dispatch(loadUser())
            dispatch(getWishList())
    
        // eslint-disable-next-line
    }, [])
  

    return (
        <div className="col-md-12 back">
            <ReactNotification />
            <div className="col-md-12">
                <div className="row pt-2">
                    <div className="col-md-9 col-sm-12 col-12">
                        <p><FontAwesomeIcon className="national-color" icon={faEnvelope} /> halalfood@gmail.com</p>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12">
                        <div className="row float-right">
                            <div>
                                <Link to="" className="text-decoration-none national-color mx-2"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                <Link to="" className="text-decoration-none national-color mx-2"><FontAwesomeIcon icon={faLinkedin} /></Link>
                                <Link to="" className="text-decoration-none national-color mx-2"><FontAwesomeIcon icon={faTwitter} /></Link>
                            </div>
                            <div style={{ borderLeft: '1px solid gray' }}></div>
                            <div>
                                {isAuthenticated ? (<span style={{ cursor: "pointer" }} className="text-decoration-none mx-4" onClick={() => dispatch(logout())}> <FontAwesomeIcon className="national-color" icon={faUserCog} /> <span className="text-dark">Logout</span> </span>) : (<Link to="/login" className="text-decoration-none mx-4"> <FontAwesomeIcon className="national-color" icon={faUserCog} /> <span className="text-dark">Login</span></Link>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <nav className="navbar navbar-expand-lg  navbar-light ">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-2" style={{ paddingLeft: '0px' }}>
                                    <Link to="/"><img src={logo} height="70px" alt="" /></Link>
                                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="col-md-10 mt-3">
                                    <div className="row">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav">
                                                <li className="nav-item active ml-4">
                                                    <Link to="" className="nav-link nav-top nav-font">HOME</Link>
                                                </li>
                                                <li className="nav-item ml-4">
                                                    <Link to="/shop" className="nav-link other-link nav-font" onClick={() => dispatch(getProducts())}>SHOP</Link>
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
                <div className="col-md-2 mt-3">
                    <ul className="row list-unstyled float-right mr-2">
                        <li className="">
                            {isAuthenticated ? (
                                <Link to="/wish-list" className="text-decoration-none text-danger "><FontAwesomeIcon icon={faHeart} style={{ fontSize: '22px' }} />{wishList.length ? (<span className="wishListCountStyle">{wishList.length}</span>) : null}</Link>
                            ) : (
                                    <Link to="/login" className="text-decoration-none text-danger"><FontAwesomeIcon icon={faHeart} style={{ fontSize: '22px' }} /></Link>
                                )}
                        </li>
                        <li className="nav-item ml-3">
                            <Link to="/shoppingCart" className="text-decoration-none text-dark mr-2"> <FontAwesomeIcon className="national-color" icon={faCartPlus} style={{ fontSize: '22px' }} /> {cartItem.length ? (<span className="cartCountStyle">{cartItem.length}</span>) : null}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;