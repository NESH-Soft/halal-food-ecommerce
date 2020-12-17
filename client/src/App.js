import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Navbar from './component/Navbar/Navbar';
import Info from './utils/Info'
import Contact from './component/Contact/Contact';
import Cart from './component/Cart/Cart';
import Shop from './component/Shop/Shop/Shop';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import MyAccount from './component/MyAccount/MyAccount';
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
import OrderReceipt from './component/MyAccount/YourOrder/OrderReceipt'
import Footer from './component/Footer/Footer/Footer';
import Category from './component/Category/Category';
import Search from './component/Search/Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LatestProduct from './component/LatestProduct/LatestProduct';

function App() {
  return (
    <div> 
      <Router>
        <Navbar />
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-3">
              <Category />
              <div className="latestProductHidePhone">
                <LatestProduct />
              </div>
            </div>
            <div className="col-md-9">
              <Search />
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
                <Route exact path="/order-receipt" component={OrderReceipt} />
                <PrivetRoute exact path="/my-account" component={MyAccount} />
                <PrivetRoute exact path="/your-orders" component={YourOrder} />
                <PrivetRoute exact path="/your-details" component={YourDetails} />
                <PrivetRoute exact path="/your-orders-items/:id" component={YourOrderItem} />
                <Route exact path="/productDetails" component={ProductDetails} />
                <Route exact path="/details" component={Details} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/verify/:token" component={ConfirmRegister} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop showUnder={160}>
          <span> <button className="btn national-background text-light"><FontAwesomeIcon icon={faChevronUp} /></button> </span>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
