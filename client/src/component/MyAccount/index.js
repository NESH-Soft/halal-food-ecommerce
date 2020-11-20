import React from 'react';
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MyAccount from './MyAccount'
const index = () => {
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="row py-5 contact">
                <div className="col-md-3">

                </div>
                <div className="col-md-8">
                    <MyAccount />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default index;