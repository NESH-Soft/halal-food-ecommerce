import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faLock, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const MyAccount = () => {
    return (
        <div className="mb-5">
            <div className="my-4" style={{ borderBottom: '3px solid #76a333' }}>
                <h2>My Account</h2>
            </div>
            <div className="row pb-5">
                <div className="col-lg-4 col-md-12">
                    <div className="account-box">
                        <div className="service-box">
                            <div className="service-icon">
                                <a href="#"> <FontAwesomeIcon icon={faGift} style={{ fontSize: '50px', color: '#fff' }} /> </a>
                            </div>
                            <div className="service-desc">
                                <h4>Your Orders</h4>
                                <p>Track, return, or buy things again</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="account-box">
                        <div className="service-box">
                            <div className="service-icon">
                                <a href="#"> <FontAwesomeIcon icon={faLock} style={{ fontSize: '50px', color: '#fff' }} /> </a>
                            </div>
                            <div className="service-desc">
                                <h4>Login &amp; security</h4>
                                <p>Edit login, name, and mobile number</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="account-box">
                        <div className="service-box">
                            <div className="service-icon">
                                <a href="#"> <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '50px', color: '#fff' }} /> </a>
                            </div>
                            <div className="service-desc">
                                <h4>Your Addresses</h4>
                                <p>Edit addresses for orders and gifts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
