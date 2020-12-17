import React from 'react';
import './ProductDetails.css';
const RiviewRatting = (props) => {
    const data = props.rating || []
    const ratingArray = data.map(function (rat) {
        return rat.rating
    });

    const totalRating = ratingArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;;
    }, 0);

    const calculatePresentence = (ratingNumber) => {
        const findRatingNumber = ratingArray.filter(rating => rating === ratingNumber)
        const length = findRatingNumber.length
        return ((100*ratingNumber*length)/ totalRating).toFixed(2)

    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="well well-sm">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 className="rating-num">
                                    5.0</h1>
                                <div className="rating">
                                    <span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star">
                                    </span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star">
                                    </span><span className="glyphicon glyphicon-star-empty"></span>
                                </div>
                                <div>
                                    <span className="glyphicon glyphicon-user"></span>{totalRating} total
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
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculatePresentence(5)}%` }}>
                                                <span className="sr-only text-dark">{calculatePresentence(5)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>4
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculatePresentence(4)}%` }}>
                                                <span className="sr-only text-dark">{calculatePresentence(4)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>3
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculatePresentence(3)}%` }}>
                                                <span className="sr-only text-dark">{calculatePresentence(3)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>2
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculatePresentence(2)}%` }}>
                                                <span className="sr-only text-dark">{calculatePresentence(2)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-md-3 text-right">
                                        <span className="glyphicon glyphicon-star"></span>1
                                    </div>
                                    <div className="col-xs-8 col-md-9">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: `${calculatePresentence(1)}%` }}>
                                                <span className="sr-only text-dark">{calculatePresentence(1)}%</span>
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