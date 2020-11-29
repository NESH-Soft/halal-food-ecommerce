import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom'
import Columns from 'react-columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/actions/product';
import { addToCart, removeCart } from '../../../redux/actions/cartAction';
import { addToWishList, removeWishList } from '../../../redux/actions/wishlistAction';
import { clearSearchState } from '../../../redux/actions/product'
import './SearchProduct.css'

const SearchProduct = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);
    const data = useSelector((state) => state.productState.searchProducts);
    const cartItem = useSelector((state) => state.cartState.cart);
    const wishList = useSelector((state) => state.wishListState.wishList);
    // include all productId from cart state
    const cartItemArray = cartItem.map(function (product) {
        return product._id
    });

    // include all productId from wishlist state
    const wishListItemArray = wishList.map(function (item) {
        return item._id
    });

    const products = data || []
    const product = products.map(pd =>
        <div className="card rounded-0 mx-2 mt-2 mb-4 products-card">
            <div className="image-box">
                <Link to="/productDetails">  <img className="card-img-top home-products-img" onClick={() => dispatch(getProduct(pd._id))} src={pd.image} alt={pd.name} /></Link>
            </div>
            <div className="box-button">
                <div className="px-2" style={{ borderTop: '1px solid lightgray' }}>
                    <p>{pd.name}</p>
                    <div className="d-flex justify-content-between">
                        <h6 style={{ backgroundColor: '#7FFF00', width: '40%', padding: '0px 10px', borderRadius: "10px" }} >¥{pd.specialPrice}</h6>
                        {
                            isAuthenticated ? (
                                wishListItemArray.includes(pd._id) ? (
                                    <span style={{ cursor: "pointer" }} onClick={() => dispatch(removeWishList(pd._id))}><FontAwesomeIcon className="text-danger" icon={faHeart} /></span>
                                ) : (
                                        <span style={{ cursor: "pointer" }} onClick={() => dispatch(addToWishList(pd._id))}><FontAwesomeIcon className="text-secondary" icon={faHeart} /></span>
                                    )


                            ) : (
                                    <Link to="/login"  ><FontAwesomeIcon className="text-secondary" icon={faHeart} /></Link>
                                )
                        }

                    </div>
                    <span><del className="text-secondary">¥{pd.price}</del></span>
                </div>
                {

                    cartItemArray.includes(pd._id) ? (
                        <button

                            disabled={
                                pd.stock <= 0
                            }

                            className="btn btn-warning rounded-0 w-100"
                            onClick={() => dispatch(removeCart(pd._id))}
                        >
                            Remove from cart
                        </button>
                    ) : (
                            <button

                                disabled={
                                    pd.stock <= 0
                                }

                                className="btn btn-Addtocart rounded-0 w-100"

                                onClick={() => dispatch(addToCart(pd))}
                            >
                                Add to cart
                            </button>
                        )

                }

            </div>
        </div>);
    var queries = [
        {
            columns: 2,
            query: 'min-width: 300px'
        },
        {
            columns: 2,
            query: 'min-width: 350px'
        },
        {
            columns: 2,
            query: 'min-width: 464px'
        },
        {
            columns: 4,
            query: 'min-width: 1200px'
        },
        {
            columns: 5,
            query: 'min-width: 1500px'
        },
        {
            columns: 10,
            query: 'min-width: 3000px'
        }
    ];

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row searchProduct">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <div style={{ borderBottom: '3px solid #76a333' }} className="my-4">
                        <h2>Your Search Products</h2>
                    </div>
                    <div>
                        <button onClick={() => dispatch(clearSearchState())}>X</button>
                    </div>

                    <Columns queries={queries}>{product}</Columns>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchProduct;