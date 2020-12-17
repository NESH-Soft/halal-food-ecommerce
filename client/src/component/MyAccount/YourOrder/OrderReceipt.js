import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './orderReceptStyle.css'


const OrderReceipt = () => {

  
  const orderReceipt = useSelector((state) => state.orderState.order);

    return (
      <div className="container">
    <div className="row">
        <div className="col-md-12">
    		<div className="invoice-title d-flex justify-content-between">

		<h6	>Invoice</h6>
		<h6 className="">Order id:{orderReceipt._id}</h6>
    		</div>
    		<hr/>
    		<div className="d-flex justify-content-between">
    			<div>
    				<address>
    				<strong>Billing To:</strong><br/>
						{orderReceipt.customer && orderReceipt.customer.name}<br/>
						{orderReceipt.customer && orderReceipt.customer.email}<br/>
							{orderReceipt.shipping && orderReceipt.shipping.line1 }<br/>
						{orderReceipt.shipping && orderReceipt.shipping.city }<br/>
						{orderReceipt.shipping && orderReceipt.shipping.postalCode }
    				</address>
    			</div>
    			<div>
    				<address>
        			<strong>Shipping To:</strong><br/>
						{orderReceipt.customer && orderReceipt.customer.name}<br/>
						{orderReceipt.customer && orderReceipt.customer.email}<br/>
    				{orderReceipt.shipping && orderReceipt.shipping.line1 }<br/>
						{orderReceipt.shipping && orderReceipt.shipping.city }<br/>
						{orderReceipt.shipping && orderReceipt.shipping.postalCode }
    				</address>
    			</div>
    		</div>
    		<div className="d-flex justify-content-between">
    			<div>
    				<address>
    					<strong>Payment:</strong><br/>
    				     {orderReceipt.paymentId? `paymentId: ${orderReceipt.paymentId}` : 'Cash on delivery'}<br/>
	            
    				</address>
    			</div>
    			<div >
    				<address>
    					<strong>Order Date:</strong><br/>
    					{ new Date(orderReceipt.createdAt).toLocaleDateString()} <br/>
    				</address>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div className="row">
    	<div className="col-md-12">
    		<div className="panel panel-default">
    			<div className="panel-heading">
    				<h3 className="panel-title"><strong>Order summary</strong></h3>
    			</div>
    			<div className="panel-body">
    				<div className="table-responsive">
    					<table className="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Item</strong></td>
        							<td className="text-center"><strong>Price</strong></td>
        							<td className="text-center"><strong>Quantity</strong></td>
        							<td className="text-right"><strong>Totals</strong></td>
                                </tr>
    						</thead>
    						<tbody>
									{
										orderReceipt.cart && orderReceipt.cart.map(item=>(
											<tr>
											<td>{item.name}</td>
											<td className="text-center">{item.specialPrice}</td>
											<td className="text-center">{item.quantity}</td>
										<td className="text-right">{item.specialPrice*item.quantity}</td>
										</tr>
										))
									}
    				
    						
                     
                            
    							<tr>
    								<td className="thick-line"></td>
    								<td className="thick-line"></td>
    								<td className="thick-line text-center"><strong>Subtotal</strong></td>
    								<td className="thick-line text-right">¥{orderReceipt.totalPrice}</td>
    							</tr>
    							<tr>
    								<td className="no-line"></td>
    								<td className="no-line"></td>
    								<td className="no-line text-center"><strong>Shipping</strong></td>
    								<td className="no-line text-right">¥00</td>
    							</tr>
    							<tr>
    								<td className="no-line"></td>
    								<td className="no-line"></td>
    								<td className="no-line text-center"><strong>Total</strong></td>
		              <td className="no-line text-right">¥{orderReceipt.totalPrice}</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    </div>
    );
};

export default OrderReceipt;