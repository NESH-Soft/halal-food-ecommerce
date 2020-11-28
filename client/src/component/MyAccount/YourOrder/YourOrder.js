import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './YourOrder.css'

const YourOrder = () => {
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
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default YourOrder;