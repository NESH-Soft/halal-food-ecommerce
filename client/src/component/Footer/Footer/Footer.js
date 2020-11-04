import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

import FooterForm from './FooterForm';

const Footer = () => {
    return (

        <div className="" style={{ backgroundColor: '#F3F6FA' }}>
            <div className="row p-5">
                <div className="col-md-4">
                    <div className="">
                        <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" srcset="" />
                    </div>
                    <br />
                    <p>Address: 60-49 Road 11378 New York</p>
                    <p>Phone: +65 11.188.888</p>
                    <p>hasib2130@gmail.com</p>
                </div>

                <div className="col-md-4">
                    <h5>Useful Links</h5>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <p><a className="text-decoration-none text-dark mx-2" href="">About Us</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">About Our Shop</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Secure Shopping</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Delivery infomation</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Privacy Policy</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Our Sitemap</a></p>
                        </div>
                        <div className="col-md-6">
                            <p><a className="text-decoration-none text-dark mx-2" href="">Who We Are</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Our Services</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Projects</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Contact</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Innovation</a></p>
                            <p><a className="text-decoration-none text-dark mx-2" href="">Testimonials</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <h5>Join Our Newsletter Now</h5>
                    <br />
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <br />
                    <FooterForm />
                    <br />

                    <div className="row col-md-6">
                        <div className=" col-md-4 footer-icon">
                            <a href="" className="text-decoration-none "><FontAwesomeIcon icon={faFacebookF} style={{ color: '#76a333', fontSize: '20px' }} /></a>
                        </div>
                        <div className="col-md-4 ">
                            <a href="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className="col-md-4 ">
                            <a href="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>

                </div>

                <div className="col-md-12">
                    <span><hr /></span>
                </div>
                <div className="col-md-8 ">
                    <p>Copyright ©2020 All rights reserved | This template is made with  by <a href="" className="text-decoration-none text-dark mx-2" > Colorlib</a></p>
                </div>

                <div className="col-md-4">
                    <img src="https://preview.colorlib.com/theme/ogani/img/payment-item.png" alt="" srcset="" />
                </div>

            </div>
        </div>

    );
};

export default Footer;