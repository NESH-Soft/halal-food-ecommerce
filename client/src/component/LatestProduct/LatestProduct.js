import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../../redux/actions/cartAction';
import './LatestProduct.css'

const LatestProduct = () => {
    const dispatch = useDispatch()
    const latestProducts = useSelector((state) => state.productState.latestProducts);
    const cartItem = useSelector((state) => state.cartState.cart);
    // include all productId from cart state
    const cartItemArray = cartItem.map(function (product) {
        return product._id
    });

    return (
        <div className="card rounded-0 p-2 mt-5">
            <div style={{ backgroundColor: '#76a333' }} className="py-1 mb-3 text-light">
                <h5 className="text-center">Latest Products</h5>
            </div>
            {
                latestProducts && latestProducts.map((pd, index) => (
                    <div key={index}>
                        <div className="row">
                            <div className="col-md-5">
                                <img src={pd.image} width="100%" height="120px" alt={pd.name} />
                            </div>
                            <div className="col-md-7 pl-3">
                                <h6>{pd.name}</h6>
                                <p> <span>¥</span>{pd.specialPrice}</p>
                                {
                                    cartItemArray.includes(pd._id) ? (
                                        <button
                                            disabled={
                                                pd.stock <= 0
                                            }
                                            className="btn btn-sm btn-Addtocart bg-danger px-3"
                                            onClick={() => dispatch(removeCart(pd._id))}
                                        >
                                            <FontAwesomeIcon icon={faMinus} /> Remove item
                                        </button>
                                    ) : (
                                            <button

                                                disabled={
                                                    pd.stock <= 0
                                                }

                                                className="btn btn-sm btn-Addtocart btn-color px-4"

                                                onClick={() => dispatch(addToCart(pd))}
                                            >
                                                <FontAwesomeIcon icon={faCartPlus} /> Add item
                                            </button>
                                        )
                                }
                            </div>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
};

export default LatestProduct;