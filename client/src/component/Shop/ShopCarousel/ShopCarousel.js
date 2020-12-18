import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { getSpecialProducts } from '../../../redux/actions/product';
import { addToCart, removeCart } from '../../../redux/actions/cartAction'
import './ShopCarousel.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
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
                    <div className="card mx-2 pt-2" key={pd._id}>
                        <img className="card-img-top" style={{ height: '140px' }} src={pd.image} alt={pd.name} />
                        <div className="card-body">
                            <h6 className="card-title">{pd.name}</h6>
                            <div className="d-flex justify-content-between">
                                <p className="text-muted"><del>¥<span>{pd.price}</span> </del> </p>
                                <h6>¥<span>{pd.specialPrice}</span> </h6>
                            </div>
                            <div className="text-center">
                                {
                                    cartItemArray.includes(pd._id) ? (
                                        <button
                                            disabled={
                                                pd.stock <= 0
                                            }
                                            className="btn btn-sm btn-Addtocart btn-danger remove-Btn-big"
                                            onClick={() => dispatch(removeCart(pd._id))}
                                        >
                                            <FontAwesomeIcon icon={faMinus} /> Remove item
                                        </button>
                                    ) : (
                                            <button
                                                disabled={
                                                    pd.stock <= 0
                                                }
                                                className="btn btn-sm btn-Addtocart btn-color addCarouselBtn"
                                                onClick={() => dispatch(addToCart(pd))}
                                            >
                                                <FontAwesomeIcon icon={faCartPlus} /> Add item
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