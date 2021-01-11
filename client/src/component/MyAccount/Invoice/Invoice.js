
import React from 'react';
import { useSelector } from 'react-redux';

import './Invoice.css'

const Invoice = () => {
	const orderReceipt = useSelector((state) => state.orderState.order);
    return (
        <div>
            <div class="invoice">
                <div class="invoice-header">
                    <div class="invoice-from">
                        <small>from</small>
                        <address class="m-t-5 m-b-5">
                            <strong class="text-inverse">Osakahalalmart</strong><br />
                                    Street Address<br />
                                    City: , Zip Code: <br />
                                    Phone: <br />
                                    Fax: 
                                </address>
                    </div>
                    <div class="invoice-to">
                        <small>Shipping to</small>
                        <address class="m-t-5 m-b-5">
		<strong class="text-inverse">{orderReceipt.customer && orderReceipt.customer.name}</strong><br />
                                    Street Address: {orderReceipt.shipping && orderReceipt.shipping.line1 } <br />
                                    City: {orderReceipt.shipping && orderReceipt.shipping.city },
																		 Zip Code: 	{orderReceipt.shipping && orderReceipt.shipping.postalCode }<br />
																		Email: {orderReceipt.customer && orderReceipt.customer.email} <br/>
                                    Phone: {orderReceipt.customer && orderReceipt.customer.phone}<br />
                                  
                                </address>
                    </div>

                    <div class="invoice-date">
                        <small>Invoice </small>
                        <div class="date text-inverse m-t-5">	{ new Date(orderReceipt.createdAt).toLocaleDateString()} </div>
                        <div class="invoice-detail">
                            {orderReceipt._id}<br />
                                Services Product
                            </div>
                    </div>
                </div>
                <div class="invoice-content">
                    <div class="table-responsive">
                        <table class="table table-invoice">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th class="text-center" width="10%">Price</th>
                                    <th class="text-center" width="10%">Quantity</th>
                                    <th class="text-right" width="20%">Total</th>
                                </tr>
                            </thead>
                            <tbody>
														{
										orderReceipt.cart && orderReceipt.cart.map(item=>(
											<tr>
											<td>{item.name}</td>
											<td className="text-center">¥{item.specialPrice}</td>
											<td className="text-center">{item.quantity}</td>
										<td className="text-right">¥{item.specialPrice*item.quantity}</td>
										</tr>
										))
									}
                            </tbody>
                        </table>
                    </div>
                    <div class="invoice-price">
                        <div class="invoice-price-left">
                            <div class="invoice-price-row">
                                <div class="sub-price">
                                    <small>Subtotal</small>
                                    <span class="text-inverse">¥{orderReceipt.subtotalPrice}</span>
                                </div>
																<div class="sub-price">
                                    <i class="fa fa-plus text-muted"></i>
                                </div>
                                <div class="sub-price">
                                    <small>Shipping</small>
                                    <span class="text-inverse">¥{orderReceipt.shippingCost}</span>
                                </div>
                                <div class="sub-price">
                                    <i class="fa fa-plus text-muted"></i>
                                </div>
                                <div class="sub-price">
                                    <small>Tax (8%)</small>
                                    <span class="text-inverse">¥{orderReceipt.tax}</span>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-price-right">
                            <small>Total</small> <span class="f-w-600">¥{orderReceipt.totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;