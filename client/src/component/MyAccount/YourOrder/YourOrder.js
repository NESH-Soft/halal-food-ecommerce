import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import emptyImg from '../../images/empty/empty.png';

const YourOrder = () => {

    const user = useSelector((state) => state.authState.user);
    const order = user.order || []
    const colors = ['#ffb234','#07be34','#99ff33']

    return (
        <div >
            <div className="your-order mb-5">
                <div className="mb-5">
                    <div className="mb-4" style={{ borderBottom: '3px solid #76a333' }}>
                        <h4>Your Orders</h4>
                    </div>
                    {
                        order.length ?
                            <table className="table">
                                <thead className="thead-light">
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
                                        order && order.map((item, index) => (
                                            <tr>
                                                <th scope="col">{index + 1}</th>
                                                <th scope="col">{item.createdAt}</th>
                                                <th scope="col">{item.shipping && `${item.shipping.line1} ${item.shipping.city} - ${item.shipping.postalCode}`}</th>
                                                <th scope="col">{item.paymentId ? 'completed' : 'uncompleted'}</th>
                                                <th scope="col">{item.totalPrice}</th>
                                                {
                                                    item.status === 'pending' &&  <th scope="col"> <button className="btn" style={{backgroundColor: colors[0]}}>{item.status}</button> </th>
                                                }
                                                {
                                                    item.status === 'complete' &&  <th scope="col"> <button className="btn" style={{backgroundColor: colors[1]}}>{item.status}</button> </th>
                                                }
                                                {
                                                    item.status === 'processing' &&  <th scope="col"> <button className="btn" style={{backgroundColor: colors[2]}}>{item.status}</button> </th>
                                                }
                                                
                                                <th scope="col"> <Link to={`/your-orders-items/${item._id}`} className="btn btn-sm national-background text-light">click</Link></th>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            : <div className="col-md-5 m-auto text-center">
                                <img src={emptyImg} alt="empty" width="100%" />
                                <p>Opps! you have not order created yet</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default YourOrder;