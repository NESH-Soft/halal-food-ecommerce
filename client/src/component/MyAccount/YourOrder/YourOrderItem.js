import React from "react";
import { useSelector } from "react-redux";

const YourOrder = (props) => {
  const user = useSelector((state) => state.authState.user);
  const id = props.match.params.id;
  const allCart = user.order || [];
  const data = allCart.filter((item) => item._id === id) || [];
  const orderReceipt = data[0] || [];
  const cart = data[0].cart || [];

  return (
    <div>
      <div class="invoice">
        <div class="invoice-header">
          <div class="invoice-from">
            <small>from</small>
            <address class="m-t-5 m-b-5">
              <strong class="text-inverse">Osakahalalmart</strong>
              <br />
              Street Address
              <br />
              City: , Zip Code: <br />
              Phone: <br />
              Fax:
            </address>
          </div>
          <div class="invoice-to">
            <small>Shipping to</small>
            <address class="m-t-5 m-b-5">
              <strong class="text-inverse">{user && user.name}</strong>
              <br />
              Street Address:{" "}
              {orderReceipt.shipping && orderReceipt.shipping.line1} <br />
              City: {orderReceipt.shipping && orderReceipt.shipping.city}, Zip
              Code: {orderReceipt.shipping && orderReceipt.shipping.postalCode}
              <br />
              Email: {user && user.email} <br />
              Phone: {user && user.phone}
              <br />
            </address>
          </div>

          <div class="invoice-date">
            <small>Invoice </small>
            <div class="date text-inverse m-t-5">
              {" "}
              {new Date(orderReceipt.createdAt).toLocaleDateString()}{" "}
            </div>
            <div class="invoice-detail">
             Order Id: {orderReceipt._id}
              <br />
             Payment Id: {orderReceipt.paymentId
                ? orderReceipt.paymentId
                : "cash on delivery"}{" "}
              <br />
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
                  <th class="text-center" width="10%">
                    Price
                  </th>
                  <th class="text-center" width="10%">
                    Quantity
                  </th>
                  <th class="text-right" width="20%">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td className="text-center">¥{item.specialPrice}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-right">
                        ¥{item.specialPrice * item.quantity}
                      </td>
                    </tr>
                  ))}
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
              <small>Total</small>{" "}
              <span class="f-w-600">¥{orderReceipt.totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
