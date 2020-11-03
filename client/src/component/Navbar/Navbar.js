import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserCog, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="back">
                <div className="col-md-12 m-auto">
                    <div className="row pt-2">
                        <div className="col-md-9 col-ms-12 col-12">
                            <p><FontAwesomeIcon icon={faEnvelope} /> hasib2130@gmail.com</p>
                        </div>
                        <div className="col-md-3 col-sm-12 col-12">
                            <div className="row float-right">
                                <div>
                                    <a href="" className="text-decoration-none text-dark mx-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="" className="text-decoration-none text-dark mx-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="" className="text-decoration-none text-dark mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
                                </div>
                                <div style={{ borderLeft: '1px solid gray' }}></div>
                                <div>
                                    <a href="" className="text-decoration-none text-dark mx-4"> <FontAwesomeIcon icon={faUserCog} /> Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="col-md-12 m-auto">
                        <div className="row">
                            <div className="col-md-3" style={{ paddingLeft: '0px' }}>
                                <a className="navbar-brand" href="#"><img src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" alt="" /></a>
                                <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active ml-4">
                                                <a className="nav-link nav-top nav-font" href="#">HOME</a>
                                            </li>
                                            <li className="nav-item ml-4">
                                                <a className="nav-link other-link nav-font" href="#">SHOP</a>
                                            </li>
                                            <li className="nav-item ml-4">
                                                <a className="nav-link other-link nav-font" href="#">PAGES</a>
                                            </li>
                                            <li className="nav-item ml-4">
                                                <a className="nav-link other-link nav-font" href="#">BLOGS</a>
                                            </li>
                                            <li className="nav-item ml-4">
                                                <a className="nav-link other-link nav-font" href="#">CONTACT</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a href="" className="text-decoration-none text-dark mr-3"><FontAwesomeIcon icon={faHeart} /></a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="" className="text-decoration-none text-dark mr-2"> <FontAwesomeIcon icon={faCartPlus} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;