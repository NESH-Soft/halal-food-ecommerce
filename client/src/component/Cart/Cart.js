import React from 'react';
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="col-md-8 m-auto">
                <table class="table table-borderless">
                    <thead>
                        <tr style={{ backgroundColor: '#DDDDDD' }}>
                            <th scope="col">IMAGE</th>
                            <th scope="col">PRODUCT</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>
                                <div class="input-group number-spinner">
                                    <button class="btn btn-danger" ><FontAwesomeIcon icon={faMinus} /> </button>
                                    <div className="text-center pt-2" style={{ width: '50px', height: '50px', border: '1px solid lightgrey' }}>
                                        <p>1</p>
                                    </div>
                                    <button class="btn btn-primary"  ><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;