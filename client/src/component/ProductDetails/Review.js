import React from 'react';
import ProductDetails from './ProductDetails';
import './ProductDetails.css';
import Ratting from './Ratting';

const Review = () => {
    return (
        <>
            <ProductDetails />
            
            <div className="col-md-12 row">
                <div className="col-md-3">
                </div>
                <div className="col-md-9 mt-5">
                    <h3 className="text-center">Send Your Opinions</h3>
                    <div className="row">
                        <div className="col-md-3 mt-5 d-flex justify-content-center">
                            <Ratting />
                        </div>
                        <div className="col-md-8">
                            <form method="post">
                                <div className="row mt-5">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control rounded-0" placeholder="Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="summery" className="form-control rounded-0" placeholder="Summery*" value="" />
                                        </div>

                                        <div className="form-group">
                                            <input type="submit" name="btnSubmit" className="btn btn-primary px-5 rounded-0" value="Send Message" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea name="txtMsg" className="form-control rounded-0" rows="5" placeholder="Review *"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;