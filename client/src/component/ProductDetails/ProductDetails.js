import React from 'react';
import Category from '../Home/Header/Category/Category';
import Search from '../Home/Header/Search/Search';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import './ProductDetails.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Details from './Details';
import Review from './Review';
import RiviewRatting from './RiviewRatting';
import UserComment from './UserComment/UserComment';

const ProductDetails = () => {
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="row">
                <div className="col-md-3">
                    <Category />
                </div>
                <div className="col-md-9">
                    <div className="col-md-9">
                        <Search />
                    </div>
                    <div className="col-md-11 productDetails">
                        <div className="col-md-12 mt-4">
                            <h4>this is a product name </h4>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-5">
                                <img src="https://shavershop.com.bd/pub/media/catalog/product/cache/e3f1eaaaa6eec7283ec95c148e1eab85/s/s/ssb_sb-w19_100_genuine_short_leather_wallet_agun_cd.jpg" width="100%" alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>৳799.00 </h3>
                                <p className="text-primary">In Stock</p>
                                <hr />
                                <div className="col-md-12 row py-4">
                                    <div className="btn-group btn-group-toggle float-right">
                                        <button className="btn btn-danger  rounded-0"><FontAwesomeIcon icon={faMinus} /></button>
                                        <button className="btn rounded-0 "><span>1</span></button>
                                        <button className="btn btn-primary  rounded-0"><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                    <div className="ml-3">
                                        <button className="btn addToCart px-5 rounded-0 ">Add to Cart</button>
                                    </div>
                                    <div className="ml-3">
                                        <button className="btn Buynow px-5 rounded-0">Buy now</button>
                                    </div>
                                    <div className="ml-3">
                                        <FontAwesomeIcon icon={faHeart} className="loveIcon" />
                                    </div>
                                </div>
                                <hr />
                                
                                <div className="mt-4">
                                    <RiviewRatting/>
                                </div>
                                <hr/>
                                <div>
                                    Categories : <Link to="">Money bag</Link>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                            <div className="text-center">
                                <Link className="text-link" to="/details">Details</Link>
                                <Link className="text-link" to="/review">Reviews</Link>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <UserComment/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;