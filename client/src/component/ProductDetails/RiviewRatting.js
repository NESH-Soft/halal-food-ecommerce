import React from 'react';
import './ProductDetails.css';
const RiviewRatting = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="well well-sm">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 className="rating-num">
                                    4.0</h1>
                                <div className="rating">
                                    <span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star">
                                    </span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star">
                                    </span><span className="glyphicon glyphicon-star-empty"></span>
                                </div>
                                <div>
                                    <span className="glyphicon glyphicon-user"></span>1,050,008 total
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row rating-desc">
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>5
                                </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress progress-striped">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                                <span className="sr-only">80%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>4
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100"style={{ width: '60%' }}>
                                                <span className="sr-only">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>3
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                                                <span className="sr-only">40%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>2
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}>
                                                <span className="sr-only">20%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>1
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '15%' }}>
                                                <span className="sr-only">15%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiviewRatting;