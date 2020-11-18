import React from 'react';
import Home from '../Home/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProductDetails from '../ProductDetails/ProductDetails';
import Details from '../ProductDetails/Details';
import Review from '../ProductDetails/Review';
import Checkout from '../Checkout/Checkout';
import Shop from '../Shop/Shop/Shop';

const OurRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/shoppingCart">
                       <Cart/>
                    </Route>
                    <Route path="/shop">
                       <Shop/>
                    </Route>
                    <Route path="/checkout">
                       <Checkout/>
                    </Route>
                    <Route path="/login">
                       <Login/>
                    </Route>
                    <Route path="/register">
                       <Register/>
                    </Route>
                    <Route path="/productDetails">
                       <ProductDetails />
                    </Route>
                    <Route path="/details">
                       <Details/>
                    </Route>
                    <Route path="/review">
                       <Review/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default OurRouter;