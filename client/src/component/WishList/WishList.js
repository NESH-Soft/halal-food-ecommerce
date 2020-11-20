import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './WishList.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer/Footer';

const WishList = () => {
    return (
        <div className="col-md-12 Wish-list">
            <Navbar />
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{width:'20%'}}>Images</th>
                                <th scope="col" style={{width:'20%'}}>Product Name</th>
                                <th scope="col" style={{width:'20%'}}>Unit Price</th>
                                <th scope="col" style={{width:'20%'}}>Stack</th>
                                <th scope="col" style={{width:'20%'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="">
                                    <img className="" style={{height:'50px', width: '50px'}} src="https://freepngimg.com/thumb/apple/9-apple-png-image-thumb.png" alt="" />
                                </th>
                                <td className="py-3">Apple</td>
                                <td className="py-3">$350</td>
                                <td className="py-3">In Stack</td>
                                <td className="py-3">
                                    <div className="row">    
                                        <div className="col-md-6">
                                            <Link><FontAwesomeIcon className="text-dark" icon={faCartPlus} /></Link>
                                        </div>
                                        <div className="col-md-6">
                                            <Link><FontAwesomeIcon className="text-danger" icon={faTrash} /></Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default WishList;