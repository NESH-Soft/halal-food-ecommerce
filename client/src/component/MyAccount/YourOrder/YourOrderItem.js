import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './YourOrder.css'

const YourOrder = (props) => {

  const user = useSelector((state) => state.authState.user);
   const id = props.match.params.id
   const allCart = user.order || []
   const data = allCart.filter(item=> item._id === id ) || []
   const cart = data[0].cart || []
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="row your-order mb-5">
                <div className="col-md-3"></div>
                <div className="col-md-9 mb-5">
                    <div className="my-4" style={{ borderBottom: '3px solid #76a333' }}>
                        <h2>Your Orders Item</h2>
                    </div>
                    <table class="table">
                        <thead class="thead-light">
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
                              cart && cart.map((item,index)=>(
                                <tr>
                                <th scope="col">{index+1}</th>
                                <th scope="col">{item.name}</th>
                                <th scope="col"><img style={{height:"40px",width:"40px"}} src={item.image} alt={item.name}/></th>
                                <th scope="col">{item.category}</th>
                                <th scope="col">{item.price}</th>
                                <th scope="col">{item.quantity}</th>
                                <th scope="col">{item.price*item.quantity}</th>
                               
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