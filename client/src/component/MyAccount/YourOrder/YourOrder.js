import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './YourOrder.css'

const YourOrder = () => {
  
    const user = useSelector((state) => state.authState.user);
    const order = user.order || []
  

    return (
        <div className="col-md-12">
            <Navbar />
            <div className="row your-order mb-5">
                <div className="col-md-3"></div>
                <div className="col-md-9 mb-5">
                    <div className="my-4" style={{ borderBottom: '3px solid #76a333' }}>
                        <h2>Your Orders</h2>
                    </div>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Address</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Total</th>
                                <th scope="col">Status</th>
                                <th scope="col">details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {

                              order && order.map((item,index)=>(
                                <tr>
                                <th scope="col">{index+1}</th>
                                <th scope="col">{item.createdAt}</th>
                              <th scope="col">{item.shipping && `${item.shipping.line1} ${item.shipping.city} - ${item.shipping.postalCode}`}</th>
                              <th scope="col">{item.paymentId? 'completed' : 'uncompleted'}</th>
                              <th scope="col">{item.totalPrice}</th>
                              <th scope="col">{item.status}</th>
                              <th scope="col"> <Link to={`/your-orders-items/${item._id}`}>click</Link></th>
                            
                            </tr>
                              ))  
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default YourOrder;