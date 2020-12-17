import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetails.css';
import { Link } from "react-router-dom";
import RiviewRatting from './RiviewRatting';
import UserComment from './UserComment/UserComment';
import Details from './Details';
import Review from './Review';
import { addToCart, removeCart } from '../../redux/actions/cartAction';

const ProductDetails = () => {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.productState.product);
    const cartItem = useSelector((state) => state.cartState.cart);
  // include all productId from cart state
  const cartItemArray = cartItem.map(function (product) {
    return product._id
   });

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
        <div>
            <div className="productDetails">
                <div style={{ borderBottom: '3px solid #76a333' }}>
                    <h4 className="card-title">{product.name}</h4>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <img src={product.image} width="100%" alt="" />
                    </div>
                    <div className="col-md-7 pt-5">
                        <h3>¥{product.price}</h3>
                        <p className="text-primary">{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                        <hr />
                        <div className="col-md-12 row py-4">
                            <div className="ml-2">

                          

        { cartItemArray.includes(product._id) ? (
            <button
                disabled={ product.stock <= 0 }
                className="btn addToCart px-4 rounded-0 btn-danger"
                onClick={() => dispatch(removeCart(product._id))}
                >
                Remove from cart
                </button>
        ) : (
               <button
              disabled={ product.stock <= 0 }
              className="btn addToCart px-4 rounded-0"
              onClick={() => dispatch(addToCart(product))}
               >
              Add to cart
              </button>
            )
          }
                               
                            </div>
                        </div>
                        <hr />
                        <div className="mt-4">
                            <RiviewRatting rating={product.review}/>
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
                isDetails === 1 ? <Details details={product.description}/> : <Review productId={product._id} />
            }
            <hr />
            <div>
                <UserComment review={product.review} />
            </div>
        </div>
    );
};

export default ProductDetails;