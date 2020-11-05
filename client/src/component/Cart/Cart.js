import React, { useState } from 'react';
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import fakedata from '../Home/FeaturedProduct/ProductView/fakedata';


const Cart = () => {
    const [products, setProducts] = useState(fakedata);
    console.log(products);
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="col-md-10 m-auto">
                <div className="mt-5">
                    <p>Home/Shoping cart</p>
                </div>
                <hr />

                <div className="row my-5">
                    <div className="col-md-8">
                        <h4>Cart( <span>{products.length}</span> items )</h4>
                        <hr />
                        <div className="mt-5">
                            {
                                products.map(pd => <div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card cart">
                                                <img src={pd.img} width="100%" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9 row">
                                            <div className="col-md-8 col-sm-6 col-6">
                                                <h4>{pd.name}</h4>
                                                <p></p>
                                                <p></p>
                                            </div>
                                            <div className="col-md-4 col-sm-6 col-6">
                                                <div className="btn-group btn-group-toggle w-100">
                                                    <button className="btn btn-danger rounded-0"><FontAwesomeIcon icon={faMinus} /></button>
                                                    <button className="btn rounded-0"><span>1</span></button>
                                                    <button className="btn btn-primary rounded-0"><FontAwesomeIcon icon={faPlus} /></button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 d-flex justify-content-between">
                                                <div className="">
                                                    <FontAwesomeIcon icon={faTrashAlt} /> <span>REMOVE ITEM</span>
                                                </div>
                                                <div className="">
                                                    <FontAwesomeIcon icon={faHeart} /> <span>MOVE TO WISH LIST</span>
                                                </div>
                                                <div className="">
                                                    <h4>${pd.price}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>The Total Amount of </h4>
                        <hr />
                        <div className="mt-4 d-flex justify-content-between">
                            <p>Total Amount</p>
                            <p>$98.5262</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Shipping Amount</p>
                            <p>$18.5262</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Vat Amount</p>
                            <p>$15.5262</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p>The total Amount of <br /> ( included VAT)</p>
                            <p>$15.5262</p>
                        </div>
                        <button className="btn btn-primary w-100">Go to Checkout</button>
                    </div>
                </div>
                <div>
                    <h4>Expected shipping delivery</h4>
                    <p>Thu., 12.03. - Mon., 16.03</p>
                </div>
                <div>
                    <h4>We accept</h4>
                    <div className="mb-5">
                        <img src="https://preview.colorlib.com/theme/ogani/img/payment-item.png"  alt="" srcset="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;