import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Info from './utils/Info'
import Contact from './component/Contact/Contact';
import Cart from './component/Cart/Cart';
import Shop from './component/Shop/Shop/Shop';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import MyAccount from './component/MyAccount/index';
import Register from './component/Register/Register';
import ConfirmRegister from './utils/ConfirmRegister'
import ProductDetails from './component/ProductDetails/ProductDetails';
import Review from './component/ProductDetails/Review';
import Home from './component/Home/Home/Home';
import Details from './component/ProductDetails/Details';
import PrivetRoute from './PrivetRoute/PrivetRoute'
import WishList from './component/WishList/WishList';
import AboutUs from './component/AboutUs/AboutUs';
import SearchProduct from './component/Search/SearchProduct/SearchProduct';
import YourOrder from './component/MyAccount/YourOrder/YourOrder';
import LoginSecurity from './component/LoginSecurity/LoginSecurity';
import YourDetails from './component/MyAccount/YourDetails/YourDetails';
import YourOrderItem from './component/MyAccount/YourOrder/YourOrderItem'

import Footer from './component/Footer/Footer/Footer';



function App() {
  return (
    <div className="container-fluid">
         
      <Router>
        
        <Navbar />
        <Switch>
          <Route exact path="/about-us" component={AboutUs} />
          <PrivetRoute exact path="/login-security" component={LoginSecurity} />
          <Route exact path="/wish-list" component={WishList} />
          <Route exact path="/searchProducts" component={SearchProduct} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoppingCart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivetRoute exact path="/my-account" component={MyAccount} />
          <PrivetRoute exact path="/your-orders" component={YourOrder} />
          <PrivetRoute exact path="/your-details" component={YourDetails} />
          <PrivetRoute exact path="/your-orders-items/:id" component={YourOrderItem} />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/productDetails" component={ProductDetails} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/verify/:token"component={ConfirmRegister} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
