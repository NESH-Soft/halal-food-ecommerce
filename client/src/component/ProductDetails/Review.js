import React from 'react';
import './ProductDetails.css';
import Ratting from './Ratting';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data) ;

    return (
        <>
            <div className="col-md-11 my-5">
                <h3 className="text-center">Send Your Opinions</h3>
                <div className="row">
                    <div className="col-md-3 mt-5 d-flex justify-content-center">
                        <Ratting />
                    </div>
                    <div className="col-md-9">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" ref={register({ required: true })} className="form-control rounded-0" placeholder="Name *"  />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="summery" ref={register({ required: true })} className="form-control rounded-0" placeholder="Summery*"  />
                                        {errors.summery && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary px-5 rounded-0" >Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea name="txtMsg" ref={register({ required: true })} className="form-control rounded-0" rows="5" placeholder="Review *"></textarea>
                                        {errors.txtMsg && <span>This field is required</span>}
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