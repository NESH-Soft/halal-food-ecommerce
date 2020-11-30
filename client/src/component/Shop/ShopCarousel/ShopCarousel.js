import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { getSpecialProducts } from '../../../redux/actions/product';
import { addToCart, removeCart } from '../../../redux/actions/cartAction'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ShopCarousel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpecialProducts());
        //eslint-disable-next-line
    }, []);

    const data = useSelector((state) => state.productState.specialProducts);
    const specialProducts = data || []
    const cartItem = useSelector((state) => state.cartState.cart)
    // include all productId from cart state
    const cartItemArray = cartItem.map(function (product) {
        return product._id
    });

    return (
        <Carousel responsive={responsive}>

            {
                specialProducts.map((pd, index) => (
                    <div class="card mx-2 pt-2">
                        <img class="card-img-top" style={{ height: '120px' }} src={pd.image} alt="" />
                        <div class="card-body">
                            <p class="card-title">{pd.name}</p>
                            <div className="d-flex justify-content-between">
                                <p className="text-muted"><del>$<span>{pd.price}</span> </del> </p>
                                <h6>$<span>{pd.specialPrice}</span> </h6>
                            </div>
                            <div className="text-center">
                                {
                                    cartItemArray.includes(pd._id) ? (
                                        <button
                                            disabled={
                                                pd.stock <= 0
                                            }
                                            className="btn btn-sm btn-Addtocart btn-danger px-3 "
                                            onClick={() => dispatch(removeCart(pd._id))}
                                        >
                                            <FontAwesomeIcon icon={faMinus} /> Remove from cart
                                        </button>
                                    ) : (
                                            <button
                                                disabled={
                                                    pd.stock <= 0
                                                }
                                                className="btn btn-sm btn-Addtocart btn-color px-3"
                                                onClick={() => dispatch(addToCart(pd))}
                                            >
                                                <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                                            </button>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default ShopCarousel;