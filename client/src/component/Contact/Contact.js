import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="row py-5 contact">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <div style={{ borderBottom: '3px solid #76a333' }}>
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div class="contact-form-right text-justify">
                                <h5>GET IN TOUCH</h5>
                                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" name="name" ref={register({ required: true })} placeholder="Your Name" required data-error="Please enter your name" />
                                                {errors.name && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" name="email" ref={register({ required: true })} placeholder="Your Email" class="form-control" required data-error="Please enter your email" />
                                                {errors.email && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" name="subject" ref={register({ required: true })} class="form-control" placeholder="Subject" required data-error="Please enter your Subject" />
                                                {errors.subject && <span>This field is required</span>}
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" name="message" ref={register({ required: true })} id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                                {errors.message && <span>This field is required</span>}
                                            </div>
                                            <div class="submit-button">
                                                <button class="btn" id="submit" style={{ backgroundColor: '#76a333', color: '#fff' }} type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 text-justify">
                            <h5>CONTACT INFO</h5>
                            <div className="mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <p><FontAwesomeIcon icon={faLocationArrow} style={{ color: '#76a333' }} /> <span className="ml-3">Address: Michael I. Days 9000 Preston Street Wichita, KS 87213</span> </p>
                                    </li>
                                    <li>
                                        <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#76a333' }} /> <span className="ml-3">Phone: <a href="tel:+1-888705770">+1-888 705 770</a></span> </p>
                                    </li>
                                    <li>
                                        <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#76a333' }} /> <span className="ml-3">Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></span> </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;