import React from 'react';
import './ProductDetails.css';
const RiviewRatting = () => {
    return (
        <div>
            <div class="row">
                <div class="col-md-9">
                    <div class="well well-sm">
                        <div class="row">
                            <div class="col-md-3">
                                <h1 class="rating-num">
                                    4.0</h1>
                                <div class="rating">
                                    <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star">
                                    </span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star">
                                    </span><span class="glyphicon glyphicon-star-empty"></span>
                                </div>
                                <div>
                                    <span class="glyphicon glyphicon-user"></span>1,050,008 total
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="row rating-desc">
                                    <div class="col-xs-3 col-md-3 text-right">
                                        <span class="glyphicon glyphicon-star"></span>5
                                </div>
                                    <div class="col-xs-8 col-md-9">
                                        <div class="progress progress-striped">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                                <span class="sr-only">80%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-3 col-md-3 text-right">
                                        <span class="glyphicon glyphicon-star"></span>4
                                    </div>
                                    <div class="col-xs-8 col-md-9">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100"style={{ width: '60%' }}>
                                                <span class="sr-only">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-3 col-md-3 text-right">
                                        <span class="glyphicon glyphicon-star"></span>3
                                    </div>
                                    <div class="col-xs-8 col-md-9">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                                                <span class="sr-only">40%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-3 col-md-3 text-right">
                                        <span class="glyphicon glyphicon-star"></span>2
                                    </div>
                                    <div class="col-xs-8 col-md-9">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}>
                                                <span class="sr-only">20%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-3 col-md-3 text-right">
                                        <span class="glyphicon glyphicon-star"></span>1
                                    </div>
                                    <div class="col-xs-8 col-md-9">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: '15%' }}>
                                                <span class="sr-only">15%</span>
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