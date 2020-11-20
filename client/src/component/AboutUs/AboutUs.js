import React from 'react';
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="col-md-12 about-list">
            <Navbar />
            <div className="row py-3">
                <div className="col-md-3"></div>
                <div className="col-md-9 row ">
                    <div className="col-md-6">
                        <img class="card-img-top" src="https://img.freepik.com/free-photo/man-looking-happy-astonished-surprised-smiling-realizing-amazing-incredible-good-news_1194-69800.jpg?size=626&ext=jpg" alt="Card image cap" />
                    </div>
                    <div className="col-md-6 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio odit officia, omnis eveniet libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero ut id doloribus totam! Necessitatibus tempora cum atque fugiat illum in dolore quibusdam possimus rem, deleniti qui accusamus veniam, optio placeat dolorem facilis quam incidunt magnam, voluptatum vero voluptates. Eum?</p>
                        <button className="btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-md-3"></div>
                <div className="col-md-9 row">
                    <div className="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;