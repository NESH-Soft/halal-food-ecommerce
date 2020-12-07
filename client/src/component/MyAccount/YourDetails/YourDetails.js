import React from 'react';
import logo from '../../images/logo/logo.png'
import './YourDetails.css'
import { useForm } from "react-hook-form";

const YourDetails = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="yourDetails mb-5">
            <div className="mb-4" style={{ borderBottom: '3px solid #76a333' }}>
                <h4>Your Details</h4>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="card text-center py-4">
                        <img src={logo} width="150px" height="50px" className="m-auto" alt="logo" />
                        <h4>Name</h4>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card p-4">
                        <div>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" name="name" ref={register({ required: true })} className="form-control" placeholder="Enter name" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="Enter email" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" name="address" ref={register({ required: true })} className="form-control" placeholder="Enter Address" />
                                {errors.address && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="number" name="phone" ref={register({ required: true })} className="form-control" placeholder="Enter Phone" />
                                {errors.phone && <span>This field is required</span>}
                            </div>
                            <button type="submit" ref={register({ required: true })} className="btn btn-primary px-5 float-right">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourDetails;