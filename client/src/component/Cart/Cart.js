import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashAlt, } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, cartItemIncrement, cartItemDecrement } from '../../redux/actions/cartAction'
import { Link } from 'react-router-dom';



const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartState);
    const cart = cartState.cart;
    const productPriceArray = cart.map(function (product) {
        return product.price * product.quantity;
    });

    const totalPrice = productPriceArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;;
    }, 0);

    return (
        <div>
            <div className="row mb-4">
                <div className="col-md-8">
                    <div style={{ borderBottom: '3px solid #76a333' }}>
                        <h4>Cart ( <span>
                            {
                                cart.length > 1 ? (`${cart.length} Items`) : (`${cart.length} Item`)
                            }
                        </span> )</h4>
                    </div>
                    <div className="mt-5">
                        {
                            cart.length === 0 ? <div>
                                Cart is empty
                               </div> : cart.map((pd, index) => <div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                        <img src={pd.image} width="100%" height="auto" alt="" />
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-6 col-12 row">
                                        <div className="col-lg-10 col-md-10 col-sm-6 col-6">
                                            <h5>{pd.name}</h5>

                                        </div>

                                        <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-left">
                                            <div className="btn-group btn-group-toggle float-right">
                                                {pd.quantity > 1 ? (<button className="btn btn-danger  rounded-0" onClick={() => dispatch(cartItemDecrement(pd._id))}><FontAwesomeIcon icon={faMinus} /></button>) : (<button className="btn btn-danger  rounded-0" disable><FontAwesomeIcon icon={faMinus} /></button>)}
                                                <button className="btn rounded-0 "><span>{pd.quantity}</span></button>
                                                {console.log(pd.stock)}
                                                {/* <button className="btn btn-primary  rounded-0" onClick={() => dispatch(cartItemIncrement(pd._id))}><FontAwesomeIcon icon={faPlus} /></button> */}
                                                {pd.quantity < pd.stock ? (<button className="btn btn-primary  rounded-0" onClick={() => dispatch(cartItemIncrement(pd._id))}><FontAwesomeIcon icon={faPlus} /></button>) : (<button className="btn btn-primary  rounded-0" disable><FontAwesomeIcon icon={faPlus} /></button>)}

                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-between">
                                            <div className="">
                                                <span onClick={() => dispatch(removeCart(pd._id))}><FontAwesomeIcon className="text-danger ml-3" icon={faTrashAlt} /></span>
                                                {/* <FontAwesomeIcon className="text-danger ml-3" icon={faHeart} /> */}
                                            </div>
                                            <div>
                                                <h6>Per {pd.unit} : ¥{pd.price} x {pd.quantity}</h6>
                                            </div>
                                            <div className="">
                                                <h6> = Total price : ¥{pd.price * pd.quantity}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ borderBottom: '3px solid #76a333' }}>
                        <h4>The Total Amount of </h4>
                    </div>
                    <div className="mt-4 d-flex justify-content-between">
                        <p>Sub Total Price</p>
                        <p>¥{totalPrice}</p>
                    </div>
                    <hr />
                    <div className="mt-4 d-flex justify-content-between">
                        <p>Total Price</p>
                        <p>¥{totalPrice}</p>
                    </div>
                    <hr />
                    <div>
                        <Link to="/checkout">
                            <button className="btn w-100" style={{ backgroundColor: '#76a333', color: '#fff' }}>Go to Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h4>Expected shipping delivery</h4>
                <p>Thu., 12.03. - Mon., 16.03</p>
            </div>
            <div>
                <h4>We accept</h4>
                <div className="mb-5">
                    <img src="https://preview.colorlib.com/theme/ogani/img/payment-item.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Cart;