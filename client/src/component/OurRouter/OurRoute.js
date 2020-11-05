import React from 'react';
import Home from '../Home/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import Register from '../Register/Register';

const OurRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/shoppingCart">
                       <Cart/>
                    </Route>
                    <Route path="/login">
                       <Login/>
                    </Route>
                    <Route path="/register">
                       <Register/>
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