import React, { useState } from 'react';
import './ProductDetails.css';
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux'
import { addReview } from '../../redux/actions/product';


const Review = ({productId}) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const [rating, setRatting] = useState();
    const onSubmit = data => {
        if (rating) {
            const review = {
                ...data,
                rating,
            }
            
        dispatch(addReview(productId,review))
        }else{
            alert("please give ratting")
        }
    };
    const ratingChanged = (newRating) => {
        setRatting(newRating);
    };

    return (
        <>
            <div className="col-md-11 my-5">
                <h3 className="text-center">Send Your Opinions</h3>
                <div className="row">
                    <div className="col-md-3 mt-5 d-flex justify-content-center">
                        <div>
                            <p className="pl-2">Give your Ratting : </p>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={35}
                                activeColor="#ffd700"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="customerName" ref={register({ required: true })} className="form-control rounded-0" placeholder="Name *" />
                                        {errors.customerName && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" ref={register({ required: true })} className="form-control rounded-0" placeholder="Email *" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary px-5 rounded-0" >Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea name="review" ref={register({ required: true })} className="form-control rounded-0" rows="5" placeholder="Review *"></textarea>
                                        {errors.review && <span>This field is required</span>}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;