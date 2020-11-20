import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './component/Contact/Contact';
import Cart from './component/Cart/Cart';
import Shop from './component/Shop/Shop/Shop';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import MyAccount from './component/MyAccount/index';
import Register from './component/Register/Register';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Review from './component/ProductDetails/Review';
import Home from './component/Home/Home/Home';
import Details from './component/ProductDetails/Details';
import PrivetRoute from './PrivetRoute/PrivetRoute'
import WishList from './component/WishList/WishList';
import AboutUs from './component/AboutUs/AboutUs';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/wish-list" component={WishList} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingCart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivetRoute exact path="/my-account" component={MyAccount} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/productDetails" component={ProductDetails} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
