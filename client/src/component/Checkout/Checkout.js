import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import {withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { amountCount, ClearCart } from '../../redux/actions/cartAction'
import { createOrder, createOrderCashOnDelivery } from '../../redux/actions/orderAction';
import { loadUser } from '../../redux/actions/authAction';

import './Checkout.css';

const Checkout = (props) => {
    const dispatch = useDispatch()
    const success = useSelector((state) => state.orderState.success);

    useEffect(() => {
        dispatch(amountCount());
        if (success) {
            dispatch(loadUser())
            dispatch(ClearCart())
            props.history.push('/');

        }
        // eslint-disable-next-line
    }, [success]);



    const cartState = useSelector((state) => state.cartState);
    const authState = useSelector((state) => state.authState);
    const userId = authState.isAuthenticated ? authState.user._id : null
    const cartItem = cartState.cart.map(pd => {
        return {
            _id: pd._id,
            name: pd.name,
            quantity: pd.quantity,
            image: pd.image,
            specialPrice: pd.specialPrice,
            description: pd.description,
            category: pd.category
        }
    });


    const [cashState, setCashState] = useState(true);
    const handleDelivery = () => {
        setCashState(true);
    }
    const handleCashDelivery = () => {
        setCashState(false);
    }



    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {

        if (cashState) {
            const orderData = {
                cart: cartItem,
                shipping: {
                    line1: data.address,
                    city: data.city,
                    postalCode: data.postCode,
                    region: data.region
                },
                customer: {
                    name: `${data.fname} ${data.lname}`,
                    phone: data.phone,
                    email: data.email,
                },

                totalPrice: cartState.cartTotal,
                userId: userId,
            };
            dispatch(createOrderCashOnDelivery(orderData))
            console.log(orderData)
        } else {
            const orderData = {
                cart: cartItem,
                shipping: {
                    line1: data.address,
                    city: data.city,
                    postalCode: data.postCode,
                    region: data.region
                },
                customer: {
                    name: `${data.fname} ${data.lname}`,
                    phone: data.phone,
                    email: data.email,
                },
                card: {
                    cardNumber: data.cardNumber,
                    expireMonth: data.expireMonth,
                    expireYear: data.expireYear,
                    cvc: data.cvc
                },
                totalPrice: cartState.cartTotal,
                userId: userId,
            };
            
            dispatch(createOrder(orderData));

        }

    }

    return (
        <div className=" checkout mb-5">
                <div className="mb-4" style={{ borderBottom: ' 3px solid #76a333' }}>
                    <h4>Checkout</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="billingCard">
                                <div>
                                    <h5>Billing and Shipping</h5>
                                    <hr className="my-4" />
                                </div>
                                <div className="checkout-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">First Name <span className="text-danger">*</span></label>
                                            <input name="fname" ref={register({ required: true })} type="text" className="form-control " />
                                            {errors.fname && <span>This field is required</span>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">Last Name <span className="text-danger">*</span></label>
                                            <input name="lname" ref={register({ required: true })} type="text" className="form-control " />
                                            {errors.lname && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email <span className="text-danger">*</span></label>
                                        <input name="email" ref={register({ required: true })} type="email" className="form-control " />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Phone <span className="text-danger">*</span></label>
                                        <input name="phone" ref={register({ required: true })} type="number" className="form-control " />
                                        {errors.phone && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Country <span className="text-danger">*</span></label>
                                        <h5>Japan</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">Postcode / ZIP<span className="text-danger">*</span></label>
                                            <input name="postCode" ref={register({ required: true })} type="number" className="form-control " />
                                            {errors.postCode && <span>This field is required</span>}
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">City<span className="text-danger">*</span></label>
                                            <input name="city" ref={register({ required: true })} type="text" className="form-control " />
                                            {errors.city && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Address<span className="text-danger">*</span></label>
                                        <input name="address" ref={register({ required: true })} type="text" className="form-control " />
                                        {errors.address && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Region / State<span className="text-danger">*</span></label>
                                        <select name="region" ref={register({ required: true })} className="form-control" id="exampleFormControlSelect1">
                                            <option>--please select--</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                        </select>
                                        {errors.region && <span>This field is required</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="checkout-order">
                                <div>
                                    <h5>Your Order</h5>
                                    <hr className="my-4" />
                                </div>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <h5>Product</h5>
                                        <h5>Subtotal</h5>
                                    </div>
                                    <hr />

                                    {
                                        cartItem && cartItem.map((item, index) => (
                                            <div className="d-flex justify-content-between">
                                                <p>{item.name} </p>
                                                <p><span>X</span> <span>{item.quantity}</span></p>
                                                <p>¥ <span>{item.specialPrice * item.quantity}</span> </p>
                                            </div>
                                        ))
                                    }

                                    <hr className="mt-0 mb-2" />


                                    <div className="d-flex justify-content-between">
                                        <h6>Subtotal</h6>
                                        <p>¥ <span>{cartState.cartSubTotal}</span></p>
                                    </div>
                                    <hr className="mt-0" />
                                    <div className="d-flex justify-content-between">
                                        <h6>Total</h6>
                                        <h6>¥ <span>{cartState.cartSubTotal}</span></h6>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between" style={{ borderBottom: '3px solid #76a333', color: '#76a333' }}>
                                        <h6>Total Weight</h6>
                                        <h6>5.5 kg ( Packaging Box : 1)</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <input type="radio" id="cashondelivery" name="cash-delivery" checked={cashState} onClick={handleDelivery} />
                                            <label htmlFor="cashondelivery">&nbsp;Cash on Delivery</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="cash-delivery" name="cash-delivery" onClick={handleCashDelivery} />
                                            <label htmlFor="cashondelivery">&nbsp; Pay with Card</label>
                                        </div>
                                    </div>
                                    <div>
                                        {cashState ? (
                                            <div className="cashondelivery text-center">
                                                <p className="p-3">Pay with cash upon delivery.</p>
                                                <button type="submit" className="btn w-100" style={{ borderRadius: '10px', backgroundColor: '#76a333', color: '#fff' }}>Place Order</button>
                                            </div>
                                        ) : (
                                                <div className="creditCard">
                                                    <div className="form-group">
                                                        <label htmlhtmlFor="exampleInputEmail1">Card Number<span>*</span> </label>
                                                        <input type="number" className="form-control" ref={register({ required: true })} name='cardNumber' id="exampleInputEmail1" placeholder="1234 1234 1234 1234" aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="exampleInputPassword1">Expired Date<span>*</span> </label>

                                                            <input type="number" className="form-control" name='expireMonth' ref={register({ required: true })} placeholder="Expire Month" id="exampleInputPassword1" />

                                                            <input type="number" className="form-control" name='expireYear' ref={register({ required: true })} placeholder="Expire Year" id="exampleInputPassword1" />

                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="exampleInputPassword1">Card Code(CVC)<span>*</span> </label>
                                                            <input type="number" className="form-control" name='cvc' ref={register({ required: true })} placeholder="CVC" id="exampleInputPassword1" />
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn  w-100" style={{ borderRadius: '10px', backgroundColor: '#76a333', color: '#fff' }}>Place Order</button>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default withRouter(Checkout);