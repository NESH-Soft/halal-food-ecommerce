import React from 'react';
import StripeCheckout  from 'react-stripe-checkout';
import { useSelector } from 'react-redux'
import { createOrder } from '../../redux/actions/orderAction';


const Payment = () => {
  const cart = useSelector((state) => state.cartState);
  return (
    <div>
      <StripeCheckout
        name='Buy product'
        stripeKey='pk_test_51HnPyBFkx0vu20iTe8yyI5YjAHKDdOIwj9ahBqvaoGXyeoSS5dcB1UgHIGg4QBGk85E01lmqFTctYldyQaIYsN6O00oEHL23wX'
        amount={cart.cartTotal}
        shippingAddress
        email='abdnaser.exe@gmail.com'
        billingAddress
        currency='JPY'
        token={() => createOrder(cart.cart)}
      />
    </div>
  )
}

export default Payment;
