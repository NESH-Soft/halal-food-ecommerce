import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact mb-5">
            <div style={{ borderBottom: '3px solid #76a333' }}>
                <h4>Contact Us</h4>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="contact-form-right text-justify">
                        <h6>GET IN TOUCH</h6>
                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" ref={register({ required: true })} placeholder="Your Name" required data-error="Please enter your name" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="email" ref={register({ required: true })} placeholder="Your Email" className="form-control" required data-error="Please enter your email" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="subject" ref={register({ required: true })} className="form-control" placeholder="Subject" required data-error="Please enter your Subject" />
                                        {errors.subject && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" ref={register({ required: true })} id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                        {errors.message && <span>This field is required</span>}
                                    </div>
                                    <div className="submit-button">
                                        <button className="btn" id="submit" style={{ backgroundColor: '#76a333', color: '#fff' }} type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 text-justify">
                    <h6>CONTACT INFO</h6>
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
    );
};

export default Contact;