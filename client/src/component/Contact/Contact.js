import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserCog, faCartPlus, faHeart, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    return (
        <div className="col-md-12">
            <Navbar/>
        <div className="row py-5 contact">
            <div className="col-md-3">

            </div>
            <div className="col-md-5">
                <div class="contact-form-right">
                    <h4>GET IN TOUCH</h4>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                    <form id="contactForm">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" placeholder="Your Email" id="email" class="form-control" name="name" required data-error="Please enter your email" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="subject" name="name" placeholder="Subject" required data-error="Please enter your Subject" />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea class="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="submit-button">
                                    <button class="btn btn-primary hvr-hover" id="submit" type="submit">Send Message</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-4">
                <h4>CONTACT INFO</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                <ul>
                    <li>
                        <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 9000 Preston Street Wichita, KS 87213 </p>
                    </li>
                    <li>
                        <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                    </li>
                    <li>
                        <p><i class="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Contact;