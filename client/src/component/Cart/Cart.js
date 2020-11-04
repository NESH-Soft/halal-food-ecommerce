import React from 'react';
import Footer from '../Footer/Footer/Footer';

import Navbar from '../Navbar/Navbar';

const Cart = () => {
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="col-md-8 m-auto">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">IMAGE</th>
                            <th scope="col">PRODUCT</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">TOTAL</th>
                            <th scope="col">REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;