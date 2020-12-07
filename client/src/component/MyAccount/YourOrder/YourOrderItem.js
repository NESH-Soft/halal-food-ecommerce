import React from 'react';
import { useSelector } from 'react-redux';

const YourOrder = (props) => {

    const user = useSelector((state) => state.authState.user);
    const id = props.match.params.id
    const allCart = user.order || []
    const data = allCart.filter(item => item._id === id) || []
    const cart = data[0].cart || []
    return (
        <div>
            <div className="your-order mb-5">
                <div className="mb-5">
                    <div className="mb-4" style={{ borderBottom: '3px solid #76a333' }}>
                        <h4>Your Orders Item</h4>
                    </div>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart && cart.map((item, index) => (
                                    <tr>
                                        <th scope="col">{index + 1}</th>
                                        <th scope="col">{item.name}</th>
                                        <th scope="col"><img style={{ height: "40px", width: "40px" }} src={item.image} alt={item.name} /></th>
                                        <th scope="col">{item.category}</th>
                                        <th scope="col">{item.price}</th>
                                        <th scope="col">{item.quantity}</th>
                                        <th scope="col">{item.price * item.quantity}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default YourOrder;