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
import SearchProduct from './component/Search/SearchProduct/SearchProduct';
import YourOrder from './component/MyAccount/YourOrder/YourOrder';
import YourDetails from './component/MyAccount/YourDetails/YourDetails';
import YourOrderItem from './component/MyAccount/YourOrder/YourOrderItem'


function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/wish-list" component={WishList} />
          <Route exact path="/searchProducts" component={SearchProduct} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingCart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/my-account" component={MyAccount} />
          <Route exact path="/your-orders" component={YourOrder} />
          <Route exact path="/your-details" component={YourDetails} />
          <Route exact path="/your-orders-items/:id" component={YourOrderItem} />
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
