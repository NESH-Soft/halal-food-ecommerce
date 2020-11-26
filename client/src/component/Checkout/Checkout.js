import React, { useState,useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {amountCount} from '../../redux/actions/cartAction'
import { createOrder } from '../../redux/actions/orderAction'
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Payment from '../payment/Payment';

import './Checkout.css';

const Checkout = () => {
    const dispatch = useDispatch()

useEffect(()=>{
  dispatch(amountCount());
  // eslint-disable-next-line
},[]);
  const cartState = useSelector((state) => state.cartState);
  const cartItem  = cartState.cart.map(pd => {
    return {
      name: pd.name,
      price: pd.price,
      quantity: pd.quantity,
      image: pd.image,
      specialPrice: pd.specialPrice,
      description: pd.description,
      category: pd.category
    }
  });


  const [cashState, setCashState] = useState('');
  const handleCashonDelivery = () => {
      setCashState('CashOnDelivery');
  }
  const handleCreditCard = () => {
      setCashState('CreditCard');
  }
  const { register, handleSubmit, watch, errors } = useForm();



  const onSubmit = data => {
    const orderData = {
    cart: cartItem,
      shipping: {
        address: data.address,
        city: data.city,
        postalCode: data.postCode,
        region: data.region
      },
    customer: {
        firstName: data.fname,
        lastName: data.lname,
        phone: data.phone,
        email: data.email,
      },
      card: {
        cardNumber: data.cardNumber,
        expireMonth: data.expireMonth,
        expireYear:data.expireYear,
        cvc: data.cvc
      },
      totalPrice: cartState.cartTotal
  };

  dispatch(createOrder(orderData));
}

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row checkout pb-5" >
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                    <div className="mb-5" style={{ borderBottom: ' 3px solid #76a333' }}>
                        <h1 >Checkout</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="billingCard">
                                    <div>
                                        <h3>Billing and Shipping</h3>
                                        <hr className="my-4" />
                                    </div>
                                    <div className="checkout-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label for="exampleInputEmail1">First Name <span className="text-danger">*</span></label>
                                                <input name="fname" ref={register({ required: true })} type="text" className="form-control " />
                                                {errors.fname && <span>This field is required</span>}
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label for="exampleInputEmail1">Last Name <span className="text-danger">*</span></label>
                                                <input name="lname" ref={register({ required: true })} type="text" className="form-control " />
                                                {errors.lname && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email <span className="text-danger">*</span></label>
                                            <input name="email" ref={register({ required: true })} type="email" className="form-control " />
                                            {errors.email && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Phone <span className="text-danger">*</span></label>
                                            <input name="phone" ref={register({ required: true })} type="number" className="form-control " />
                                            {errors.phone && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Country <span className="text-danger">*</span></label>
                                            <h5>Japan</h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label for="exampleInputEmail1">Postcode / ZIP<span className="text-danger">*</span></label>
                                                <input name="postCode" ref={register({ required: true })} type="number" className="form-control " />
                                                {errors.postCode && <span>This field is required</span>}
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label for="exampleInputEmail1">City<span className="text-danger">*</span></label>
                                                <input name="city" ref={register({ required: true })} type="text" className="form-control " />
                                                {errors.city && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Address<span className="text-danger">*</span></label>
                                            <input name="address" ref={register({ required: true })} type="text" className="form-control " />
                                            {errors.address && <span>This field is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Region / State<span className="text-danger">*</span></label>
                                            <select name="region" ref={register({ required: true })} class="form-control" id="exampleFormControlSelect1">
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
                                        <h3>Your Order</h3>
                                        <hr className="my-4" />
                                    </div>
                                    <div className="mt-4">
                                        <div className="d-flex justify-content-between">
                                            <h5>Product</h5>
                                            <h5>Subtotal</h5>
                                        </div>
                                        <hr />

                                        {
                                            cartItem && cartItem.map((item,index)=>(
                                                <div className="d-flex justify-content-between">
                                                <p>{item.name} </p>
                                                <p><span>X</span> <span>{item.quantity}</span></p>
                                                <p>¥ <span>{item.price*item.quantity}</span> </p>
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
                                        <div className="d-flex justify-content-between text-primary" style={{ borderBottom: '3px solid #397bff' }}>
                                            <h6>Total Weight</h6>
                                            <h6>5.5 kg ( Packaging Box : 1)</h6>
                                        </div>
                                        <div className="my-3">
                                            <div>
                                                <input type="radio" id="cashondelivery" name="cash-delivery" ref={register} defaultValue="CashOnDelivery" onClick={handleCashonDelivery} />
                                                <label for="cashondelivery">&nbsp;Cash on Delivery</label>
                                            </div>
                                            {
                                                cashState == 'CashOnDelivery' ? (<div className="cashondelivery text-center">
                                                    <p className="p-3">Pay with cash upon delivery.</p>
                                                </div>) : ''
                                            }

                                        </div>
                                        <div>
                                            <div>
                                                <input type="radio" id="creditCard" onClick={handleCreditCard} name="gendar" />
                                                <label for="creditCard">&nbsp;Credit Card</label>
                                            </div>
                                            {
                                                cashState == 'CreditCard' ? (<div className="creditCard">
                                                    <p>Pay With Creadit Card</p>
                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputEmail1">Card Number<span>*</span> </label>
                                                        <input type="number" class="form-control" ref={register({ required: true })} name='cardNumber' id="exampleInputEmail1" placeholder="1234 1234 1234 1234" aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="row">
                                                        <div class="col-md-6 form-group">
                                                            <label for="exampleInputPassword1">Expired Date<span>*</span> </label>

                                                            <input type="number" class="form-control" name='expireMonth' ref={register({ required: true })} placeholder="Expire Month" id="exampleInputPassword1" />

                                                            <input type="number" class="form-control" name='expireYear' ref={register({ required: true })} placeholder="Expire Year" id="exampleInputPassword1" />

                                                        </div>
                                                        <div class="col-md-6 form-group">
                                                            <label for="exampleInputPassword1">Card Code(CVC)<span>*</span> </label>
                                                            <input type="number" class="form-control" name='cvc' ref={register({ required: true })} placeholder="CVC" id="exampleInputPassword1" />
                                                        </div>
                                                    </div>
                                                </div>) : ''
                                            }
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-3 mt-3" style={{ borderRadius: '10px' }}>Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;