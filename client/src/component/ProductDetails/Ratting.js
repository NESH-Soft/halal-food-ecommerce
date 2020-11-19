import React from 'react';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

const Ratting = (newRating) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div>
            <p className="pl-2">Give your Ratting : </p>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={35}
                activeColor="#ffd700"
            />
        </div>
    );
};

export default Ratting;