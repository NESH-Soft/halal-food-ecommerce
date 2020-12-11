import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-list">
            <div>
                <div className="mb-4" style={{ borderBottom: '3px solid #76a333' }}>
                    <h4>About Us</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="card-img-top" src="https://img.freepik.com/free-photo/man-looking-happy-astonished-surprised-smiling-realizing-amazing-incredible-good-news_1194-69800.jpg?size=626&ext=jpg" alt="Card cap" />
                    </div>
                    <div className="col-md-6 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio odit officia, omnis eveniet libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero ut id doloribus totam! Necessitatibus tempora cum atque fugiat illum in dolore quibusdam possimus rem, deleniti qui accusamus veniam, optio placeat dolorem facilis quam incidunt magnam, voluptatum vero voluptates. Eum?</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default AboutUs;