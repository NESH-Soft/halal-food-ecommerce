import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.svg';

const Footer = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#F3F6FA' }}>
            <div className="row p-4">
                <div className="col-md-4">
                    <div className="">
                        <img src={logo} height="80px" alt="" />
                    </div>
                    <br />
                    <br/>
                    <p>Address: 60-49 Road 11378 New York</p>
                    <p>Phone: +65 11.188.888</p>
                    <p></p>
                </div>

                <div className="col-md-4">
                    <h5>Useful Links</h5>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <p><Link to="/about-us" className="text-decoration-none text-dark mx-2">About Us</Link></p>
                            <p><Link to="" className="text-decoration-none text-dark mx-2">Delivery infomation</Link></p>
                            <p><Link to="" className="text-decoration-none text-dark mx-2">Privacy Policy</Link></p>
                            <p><Link to="" className="text-decoration-none text-dark mx-2">Our Sitemap</Link></p>
                        </div>
                        <div className="col-md-6">
                            <p><Link to="" className="text-decoration-none text-dark mx-2">Who We Are</Link></p>
                            <p><Link to="" className="text-decoration-none text-dark mx-2">Our Services</Link></p>
                            <p><Link to="/contact" className="text-decoration-none text-dark mx-2">Contact</Link></p>
                            <p><Link to="" className="text-decoration-none text-dark mx-2">Testimonials</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="mb-5">
                        <h5>Join Our Social media platform</h5>
                    </div>
                    <div>
                        <Link to="" className="text-decoration-none mr-4"><FontAwesomeIcon icon={faFacebookF} style={{ color: '#76a333', fontSize: '20px' }} /></Link>
                        <Link to="" className="text-decoration-none mr-4"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#76a333', fontSize: '20px' }} /></Link>
                        <Link to="" className="text-decoration-none mr-4"><FontAwesomeIcon icon={faTwitter} style={{ color: '#76a333', fontSize: '20px' }} /></Link>
                    </div>

                </div>

                <div className="col-md-12">
                    <span><hr /></span>
                </div>
                <div className="col-md-8 ">
                    <p>Copyright ©2020 All rights reserved | This software is made with by <a href="https://sheikhhasib.github.io/portfolio/" className="text-decoration-none text-dark mx-2" >NESH SOFT</a></p>
                </div>

                <div className="col-md-4">
                    <img src="https://preview.colorlib.com/theme/ogani/img/payment-item.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;  