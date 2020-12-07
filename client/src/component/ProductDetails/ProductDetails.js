import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ProductDetails.css';
import { Link } from "react-router-dom";
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
        if (isDetails === 1) {
            setDetailsColor('2px solid #fcb800')
            setreviewColor('')
        } else {
            setreviewColor('2px solid #fcb800')
            setDetailsColor('')
        }
    }

    return (
        <>
            <div className="productDetails">
                <div style={{ borderBottom: '3px solid #76a333' }}>
                    <h4 className="card-title">{product.name}</h4>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <img src={product.image} width="100%" alt="" />
                    </div>
                    <div className="col-md-7 pt-5">
                        <h3>৳{product.price}</h3>
                        <p className="text-primary">{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                        <hr />
                        <div className="col-md-12 row py-4">
                            <div className="ml-2">
                                <button className="btn addToCart px-4 rounded-0 ">Add to Cart</button>
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
        </>
    );
};

export default ProductDetails;