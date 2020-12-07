import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faLock, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const MyAccount = () => {
    return (
        <div className="mb-5">
            <div className="mb-4" style={{ borderBottom: '3px solid #76a333' }}>
                <h4>My Account</h4>
            </div>
            <div className="row pb-5">
                <div className="col-lg-4 col-md-12">
                    <Link to="/your-orders">
                        <div className="account-box">
                            <div className="service-box">
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faGift} style={{ fontSize: '50px', color: '#fff' }} />
                                </div>
                                <div className="service-desc">
                                    <h4>Your Orders</h4>
                                    <p>Track, return, or buy things again</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-4 col-md-12">
                <Link to="/login-security">
                    <div className="account-box">
                        <div className="service-box">
                            <div className="service-icon">
                              <FontAwesomeIcon icon={faLock} style={{ fontSize: '50px', color: '#fff' }} /> 
                            </div>
                            <div className="service-desc">
                                <h4>Login &amp; security</h4>
                                <p>change password</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-12">
                <Link to="/your-details">
                    <div className="account-box">
                        <div className="service-box">
                            <div className="service-icon">
                           <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '50px', color: '#fff' }} />
                            </div>
                            <div className="service-desc">
                                <h4>Your information</h4>
                                <p>Edit your information</p>
                            </div>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
