import React, { useState } from 'react';
import './Checkout.css'

const CheckoutOrder = () => {
    const [cashState, setCashState] = useState('')
    const handleCashonDelivery = () => {
        setCashState('CashOnDelivery');
    }
    const handleCreditCard = () => {
        setCashState('CreditCard');
    }
    return (
        <div className="mt-4">
            <div className="d-flex justify-content-between">
                <h5>Product</h5>
                <h5>Subtitle</h5>
            </div>
            <hr />
            {/* ata thke dynamic hobe */}
            <div className="d-flex justify-content-between">
                <p>alu potol  </p>
                <p><span>X</span> <span>1</span></p>
                <p>¥ <span>1,990</span> </p>
            </div>
            <hr className="mt-0 mb-2" />
            {/* ata thke dynamic shes */}

            <div className="d-flex justify-content-between">
                <h6>Subtitle</h6>
                <p>¥ <span>1,990</span></p>
            </div>
            <hr className="mt-0" />
            <div className="d-flex justify-content-between">
                <h6>Total</h6>
                <h6>¥ <span>1,990</span></h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between text-primary" style={{ borderBottom: '3px solid #397bff' }}>
                <h6>Total Weight</h6>
                <h6>5.5 kg ( Packaging Box : 1)</h6>
            </div>
            <div className="my-3">
                <div>
                    <input type="radio" id="cashondelivery" name="gendar" onClick={handleCashonDelivery} />
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
                            <label for="exampleInputEmail1">Card Number<span>*</span> </label>
                            <input type="number" class="form-control" id="exampleInputEmail1" placeholder="1234 1234 1234 1234" aria-describedby="emailHelp" />
                        </div>
                        <div className="row">
                            <div class="col-md-6 form-group">
                                <label for="exampleInputPassword1">Expired Date<span>*</span> </label>
                                <input type="number" class="form-control" placeholder="MM/YY" id="exampleInputPassword1" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label for="exampleInputPassword1">Card Code(CVC)<span>*</span> </label>
                                <input type="number" class="form-control" placeholder="CVC" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>) : ''
                }

            </div>


        </div>
    );
};

export default CheckoutOrder;