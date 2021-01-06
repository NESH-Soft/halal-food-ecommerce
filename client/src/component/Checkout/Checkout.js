import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { amountCount, ClearCart } from '../../redux/actions/cartAction'
import { createOrder, createOrderCashOnDelivery } from '../../redux/actions/orderAction';
import { loadUser } from '../../redux/actions/authAction';

import './Checkout.css';
import { stateNameFunc } from './stateNamefunc';
import { string } from 'joi';

const Checkout = (props) => {
    const dispatch = useDispatch()
    const success = useSelector((state) => state.orderState.success);

    useEffect(() => {
        dispatch(amountCount());
        if (success) {
            dispatch(loadUser())
            dispatch(ClearCart())
            setPlaceButton(false)
            props.history.push('/order-receipt');

        }
        // eslint-disable-next-line
    }, [success]);

    const [stateName, setStateName] = useState(null);
    const handleZipCode = (event) => {
        setStateName(stateNameFunc(event.target.value))
    }

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

    const [placeButton, setPlaceButton] = useState(false);

    const handleDelivery = () => {
        setCashState(true);
    }
    const handleCashDelivery = () => {
        setCashState(false);
    }
    const { register, handleSubmit, errors, } = useForm();


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
            setPlaceButton(true)
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
            setPlaceButton(true)
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
                                        {errors.fname && <span className="text-danger" >This field is required</span>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="exampleInputEmail1">Last Name <span className="text-danger">*</span></label>
                                        <input name="lname" ref={register({ required: true })} type="text" className="form-control " />
                                        {errors.lname && <span className="text-danger" >This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email <span className="text-danger">*</span></label>
                                    <input name="email" ref={register({ required: true })} type="email" className="form-control " />
                                    {errors.email && <span className="text-danger" >This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone <span className="text-danger">*</span></label>
                                    <input name="phone" ref={register({ required: true })} type="number" className="form-control " />
                                    {errors.phone && <span className="text-danger" >This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Country <span className="text-danger">*</span></label>
                                    <h5>Japan</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="exampleInputEmail1">Postcode / ZIP<span className="text-danger">*</span></label>
                                        <input name="postCode"  
                                        ref={register({
                                            required: "Required",
                                            pattern: {
                                              value: /(^\d{7}$)|(^\d{3}-\d{4}$)/i,
                                              message: "invalid email address"
                                            }
                                          })}
                                        onBlur={handleZipCode} type="text" className="form-control " placeholder="000-0000" />
                                        {errors.postCode && <span className="text-danger" >This field is required</span>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="exampleInputEmail1">City<span className="text-danger">*</span></label>
                                        <input name="city" ref={register({ required: true })} type="text" className="form-control " />
                                        {errors.city && <span className="text-danger" >This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Address<span className="text-danger">*</span></label>
                                    <input name="address" ref={register({ required: true })} type="text" className="form-control " />
                                    {errors.address && <span className="text-danger" >This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Region / State<span className="text-danger">*</span></label>
                                    <select name="region" ref={register({ pattern: /^[A-Za-z]+$/i })} className="form-control" id="exampleFormControlSelect1">
                                        {
                                            stateName === null ? <option >--select state--</option> : <option value={stateName}>{stateName}</option>
                                        }
                                        <option value="Aichi">Aichi</option>
                                        <option value="Akita">Akita</option>
                                        <option value="Aomori">Aomori</option>
                                        <option value="Chiba">Chiba</option>
                                        <option value="Ehime">Ehime</option>
                                        <option value="Fukui">Fukui</option>
                                        <option value="Fukuoka">Fukuoka</option>
                                        <option value="Fukushima">Fukushima</option>
                                        <option value="Gifu">Gifu</option>
                                        <option value="Gunma">Gunma</option>
                                        <option value="Hiroshima">Hiroshima</option>
                                        <option value="Hokkaido">Hokkaido</option>
                                        <option value="Hyogo">Hyogo</option>
                                        <option value="Ibaraki">Ibaraki</option>
                                        <option value="Ishikawa">Ishikawa</option>
                                        <option value="Iwate">Iwate</option>
                                        <option value="Kagawa">Kagawa</option>
                                        <option value="Kagoshima">Kagoshima</option>
                                        <option value="Kanagawa">Kanagawa</option>
                                        <option value="Kochi">Kochi</option>
                                        <option value="Kumamoto">Kumamoto</option>
                                        <option value="Kyoto">Kyoto</option>
                                        <option value="Mie">Mie</option>
                                        <option value="Miyagi">Miyagi</option>
                                        <option value="Miyazaki">Miyazaki</option>
                                        <option value="Nagano">Nagano</option>
                                        <option value="Nagasaki">Nagasaki</option>
                                        <option value="Nara">Nara</option>
                                        <option value="Niigata">Niigata</option>
                                        <option value="Oita">Oita</option>
                                        <option value="Okayama">Okayama</option>
                                        <option value="Okinawa">Okinawa</option>
                                        <option value="Osaka">Osaka</option>
                                        <option value="Saga">Saga</option>
                                        <option value="Saitama">Saitama</option>
                                        <option value="Shiga">Shiga</option>
                                        <option value="Shimane">Shimane</option>
                                        <option value="Shizuoka">Shizuoka</option>
                                        <option value="Tochigi">Tochigi</option>
                                        <option value="Tokushima">Tokushima</option>
                                        <option value="Tokyo">Tokyo</option>
                                        <option value="Tottori">Tottori</option>
                                        <option value="Toyama">Toyama</option>
                                        <option value="Wakayama">Wakayama</option>
                                        <option value="Yamagata">Yamagata</option>
                                        <option value="Yamaguchi">Yamaguchi</option>
                                        <option value="Yamanashi">Yamanashi</option>
                                    </select>
                                    {errors.region && <span className="text-danger" >This field is required</span>}
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
                                            <p><span className="text-danger" >X</span> <span className="text-danger" >{item.quantity}</span></p>
                                            <p>¥ <span className="text-danger" >{item.specialPrice * item.quantity}</span> </p>
                                        </div>
                                    ))
                                }

                                <hr className="mt-0 mb-2" />


                                <div className="d-flex justify-content-between">
                                    <h6>Subtotal</h6>
                                    <p>¥ <span className="text-danger" >{cartState.cartSubTotal}</span></p>
                                </div>
                                <hr className="mt-0" />
                                <div className="d-flex justify-content-between">
                                    <h6>Total</h6>
                                    <h6>¥ <span className="text-danger" >{cartState.cartSubTotal}</span></h6>
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
                                        <label htmlFor="cashondelivery">&nbsp;Pay With Credit Card</label>
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
                                                <p>Pay With Credit Card</p>
                                                <div className="form-group">
                                                    <label htmlhtmlFor="exampleInputEmail1">Card Number<span className="text-danger" >*</span> </label>
                                                    <input type="number" className="form-control" ref={register({ required: true })} name='cardNumber' id="exampleInputEmail1" placeholder="1234 1234 1234 1234" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <label htmlFor="exampleInputPassword1">Expired Date<span className="text-danger" >*</span> </label>

                                                        <input type="number" className="form-control" name='expireMonth' ref={register({ required: true })} placeholder="Expire Month" id="exampleInputPassword1" />

                                                        <input type="number" className="form-control" name='expireYear' ref={register({ required: true })} placeholder="Expire Year" id="exampleInputPassword1" />

                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <label htmlFor="exampleInputPassword1">Card Code(CVC)<span className="text-danger" >*</span> </label>
                                                        <input type="number" className="form-control" name='cvc' ref={register({ required: true })} placeholder="CVC" id="exampleInputPassword1" />
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                    className="btn  w-100"
                                                    disabled={placeButton}
                                                    style={{
                                                        borderRadius: '10px',
                                                        backgroundColor: '#76a333',
                                                        color: '#fff'
                                                    }}>Place Order</button>
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