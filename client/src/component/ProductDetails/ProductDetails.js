import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import './ProductDetails.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RiviewRatting from './RiviewRatting';
import UserComment from './UserComment/UserComment';
import Details from './Details';
import Review from './Review';

const ProductDetails = () => {
    const product = useSelector((state) => state.productState.product);
    const [isDetails, setIsDetails] = useState(1);
    const [reviewColor, setreviewColor] = useState('');
    const [DetailsColor, setDetailsColor] = useState('');
    const handleProduct = (isDetails) => {
        setIsDetails(isDetails);
        if (isDetails == 1) {
            setDetailsColor('2px solid #fcb800')
            setreviewColor('')
        } else {
            setreviewColor('2px solid #fcb800')
            setDetailsColor('')
        }
    }

    return (
        <div className="container-fluid" style={{ marginTop: '195px' }}>
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                    <div className="col-md-11 productDetails">
                        <div className="col-md-12 mt-4">
                            <h4>{product.name}</h4>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-5">
                                <img src={product.image} width="100%" alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>৳{product.price}</h3>
                                <p className="text-primary">{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                                <hr />
                                <div className="col-md-12 row py-4">
                                    <div className="btn-group btn-group-toggle float-right">
                                        <button className="btn btn-danger  rounded-0"><FontAwesomeIcon icon={faMinus} /></button>
                                        <button className="btn rounded-0 "><span>1</span></button>
                                        <button className="btn btn-primary  rounded-0"><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                    <div className="ml-2">
                                        <button className="btn addToCart px-4 rounded-0 ">Add to Cart</button>
                                    </div>
                                    <div className="ml-2">
                                        <button className="btn Buynow px-4 rounded-0">Buy now</button>
                                    </div>
                                    <div className="ml-2">
                                        <FontAwesomeIcon icon={faHeart} className="loveIcon" />
                                    </div>
                                </div>
                                <hr />

                                <div className="mt-4">
                                    <RiviewRatting />
                                </div>
                                <hr />
                                <div>
                                    Categories : <Link to="">{product.category}</Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-md-12">
                            <div className="text-center">
                                <Link className="text-link" onClick={() => handleProduct(1)} style={{ borderBottom: DetailsColor }}>Details</Link>
                                <Link className="text-link" onClick={() => handleProduct(0)} style={{ borderBottom: reviewColor }}>Reviews</Link>
                            </div>
                        </div>
                    </div>
                    {
                        isDetails === 1 ? <Details /> : <Review />
                    }
                    <hr />
                    <div>
                        <UserComment />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;