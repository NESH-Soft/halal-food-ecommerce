import React from 'react';
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Checkout.css';
import CheckoutForm from './CheckoutForm';
import CheckoutOrder from './CheckoutOrder';

const Checkout = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row checkout py-5" >
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                    <div className="text-center mb-5" style={{ borderBottom: ' 3px solid #76a333' }}>
                        <h1 >Checkout</h1>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="billingCard">
                                    <div>
                                        <h3>Billing and Shipping</h3>
                                        <hr className="my-4" />
                                    </div>
                                    <CheckoutForm />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="checkout-order">
                                    <div>
                                        <h3>Your Order</h3>
                                        <hr className="my-4" />
                                    </div>
                                    <CheckoutOrder />
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